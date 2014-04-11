// 'The Node Beginner Book' by Manuel Kiesling
var querystring = require("querystring"), 
  fs = require("fs"), 
  formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' called.");
  
  var body = '<html>'+
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
      '</head>' +
      '<body>' + 
      '<form action="/upload" enctype="multipart/form-data" ' +
      'method="post">' +
      '<input type="file" name="Upload" multiple="multiple">' +
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
    
    //Possible error on Windows systems: tried to rename to
    //an existing file
    fs.rename(files.upload.path, "./tmp/Sample.png", function(err) {
      if (err) {
        fs.unlink("./tmp/Sample.png");
        fs.rename(files.upload.path, "./tmp/Sample.png");
      }
    });
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image: <br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("./tmp/Sample.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error.message + "\n"); //Original text wrong: the object 'err' does not exist here
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
