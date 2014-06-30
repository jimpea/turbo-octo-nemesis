// 'The Node Beginner Book' by Manuel Kiesling
var requestHandler = {},
  url              = require("url"),
  mime             = require("mime"),
  querystring      = require("querystring"), 
  fs               = require("fs"), 
  formidable       = require("formidable");

function start(response) {
  console.log("Request handler 'start' called.");
  
  var body = '<html>'+
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
      '<title>Welcome to the nodejs tutorial</title>' +
      '</head>' +
      '<body>' + 
      '<form action="/upload" enctype="multipart/form-data" ' +
      'method="post">' +
      '<input type="file" name="Upload" multiple="multiple"/>' +
      '<input type="submit" value="Upload File"/>' +
      '</form>' +
      '</body>' +
      '</html>';
  response.writeHead(200, {"Content-Type":"text/html"});
  response.write(body);
  response.end();
}

function upload(response, request) {
 console.log("Request handler 'upload' called.");
  var form = new formidable.IncomingForm();
  console.log("about to parse");
 
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    if (error) {
      response.writeHead(500, {"Content-Type":"text/plain"});
      response.end("Oops! " + error+ "\n");
      return
    }
    
    fs.renameSync(files.Upload.path, "./tmp/" + files.Upload.name); //Update the streamed filename with its original filename
   
        
    console.log("Stream the files: " + files.Upload.name);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image: <br/>");
    response.end("<img src='/show?i=" + files.Upload.name + "'/>"); //Display the file using the query variable (i)
  });
}

function show(response, request) {
  console.log("Request handler 'show' was called.");
  var image = querystring.parse(url.parse(request.url).query).i; //Parse out the query string variable
  
  if(!image){ //Make sure we have a value
    response.writeHead(500, {"Content-Type":"text/plain"});
    response.end("No Image in QueryString");
    return;
  }
  
  fs.readFile("./tmp/" + image, "binary", function(error, file) {
    var type = ""; //Mime-Type value
    
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.end(error.message + "\n");
      return;
    }

    type = mime.lookup(file);
    response.writeHead(200, {"Content-Type":type});
    response.end(file,"binary");
 
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
