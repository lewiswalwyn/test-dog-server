/*
Notes from class 2019-11-22

WORKING HTML SERVER FOR HANDLING REQUESTS FOR DOGS
RUN CODE REGULARLY! DEBUGGING IS HARD!

Making a request from Google Chrome:
Navigate to 'localhost:8080/dogs' and the server should return dogs.json

Insomnia is an http request tool - better than chrome

-----------------------------------------

REST - Representative State Transfer
- Use CRUD HTTP methods correctly!
GET -> Read info.
POST -> Create data. 
PUT -> Replace data. 
PATCH -> Update Data. 
DELETE -> Delete data.
- Statelessness - idempotency (all requests should be handled according to the same set of rules, in the same way)
- URLs -> resources at a specified address (sometimes with parameters on the end) (eg rooms/101/cats/oswald)
- Use parameters to denote individual resources
- Use queries to apply actions to your data (eg /rooms?sortby=age&order-desc)
- Use JSON or XML in req / res (XML is older & less popular)

-----------------------------------------

MVC - Model View Controller

Client
 |
 V
Request (URL/path, method,body)
 |
 V
Server entry point 
 |  [Routing]
 V
Controllers  <--->  Models
 |
 V
Response  <----->  Views
 |
 V
Client

(Controllers, models & shapes are all just functions)

*/

const http = require("http");
const { sendDogs, addDog } = require("./controllers/dogs-controllers.js");

const server = http.createServer((request, response) => {
  console.log("a request was made");
  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;
  response.write(JSON.stringify({ msg: "Hello world" }));
  response.end();
});

const server2 = http.createServer((request, response) => {
  const { url, method } = request;
  // console.log(url, method);
  if (url === "/dogs" && method === "GET") {
    sendDogs(request, response);
  } else if (url === "/dogs" && method === "POST") {
    addDog(request, response);
  }
});

// server.listen(8080, err => {
//   if (err) console.log(err);
//   else console.log("successfully listening on port 8080");
// });

server2.listen(8080, err => {
  if (err) console.log(err);
  else console.log("Successfully listening on port 8080");
});
