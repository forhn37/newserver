const http = require("http");
const fs = require('fs');

http.createServer(function(request, response) {
  if(request.url === "/") {
    let doc = 
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }
          li {
            list-style : none;
          }
          a{
            text-decoration : none;
            color : inherit;
          }
          #root h1 {
            background-color : #444;
            font-size : 40px;
            color: #fff;

            width: 100vw;
            height: 30vh;
            text-align : center
          }
          #root ul {
            display:flex;
            flex-direction: column;
            justify-content : center;
            align-items : center;

            width : 100vw;
            height: 70vh;
            background-color: #777;
            padding: 2vw;
          }
          #root ul li {
            font-size : 32px;
            font-weight: 600;
            color: #111;
          }
          .btn {
            width : fit-content;
            height: 50px;
            border-radius : 12px;
            background-color : #888;
            color: #111;
          }
          </style>
          </head>
          <body>
          <div id="root">
          <h1>
            우리가족 <a href="localhost5050/sub">홈페이지</a> 
          </h1>
          <ul>
            <li>김현</li>
            <li>김하현</li>
            <li>김하민</li>
            <li>임하나</li>
            <li>김나현</li>
            <li>윤준현</li>
            <li>이민구</li>
          </ul>
        </div>
      </body>
    </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(doc)
  }
  if(request.url === "/sub") {
    fs.readFile("index.html",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {
        response.setTimeout(3000, function() {
          response.writeHead(200, {'Content-Type': 'text/html'})
          response.end(data);
        })
      }
    })
  }
}).listen(5050)