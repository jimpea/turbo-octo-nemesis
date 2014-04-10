// 'The Node Beginner Book' by Manuel Kiesling
var querystring = require("querystring"), fs = require("fs");

function start(response, postData) {
  console.log("Request handler 'start' called.");
  var body = '<html>'+
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
      '</head>' +
      '<body>' + 
      '<form action="/upload" method="post">' +
      '<textarea name="text" rows="20" cols="60"></textarea>' +
      '<input type="submit" value="Submit Text"/>' +
      '</form>' +
      '</body>' +
      '</html>';
  response.writeHead(200, {"Content-Type":"text/html"});
  response.write(body);
  response.end();
}

function upload(response, postData) {
 console.log("Request handler 'upload' called."); 
 response.writeHead(200, {"Content-Type":"text/plain"});
 response.write("You have sent the text: " + querystring.parse(postData).text);
 response.end();
}

function show(response, postData) {
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
