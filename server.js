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
