const { readDogData, addDogData } = require("../models/dogs-models.js");

function sendDogs(request, response) {
  // get the dog data from the model
  readDogData(function(err, dogs) {
    // add a status code & content type
    response.statusCode - 200;
    // stringify the data
    response.setHeader("Content-Type", "application/json");
    // write data to response
    response.write(dogs);
    // send it back
    response.end();
  });
}

function addDog(request, response) {
  console.log("got into the controller");
  let body = "";
  request.on("data", chunk => {
    body += chunk;
  });
  request.on("end", () => {
    const dog = JSON.parse(body);
    console.log("hello", dog);
    addDogData(dog, function() {
      response.statusCode - 201;
      response.setHeader("Content-Type", "application/json");
      response.write(body);
      response.end();
    });
  });
}

module.exports = { sendDogs, addDog };
