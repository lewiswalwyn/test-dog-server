const fs = require("fs");

function readDogData(cb) {
  // use fs to read dog-data
  // store it as a variable
  //use callback to send data back

  fs.readFile(__dirname + "/../data/dogs.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    else {
      cb(null, data);
    }
  });
  // __dirname will always point to the folder in which the function is declared, not where is it invoked
}

function addDogData(dog, cb) {
  fs.readFile(__dirname + "/../data/dogs.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    else {
      console.log("read dogs successfully");
      const dogs = JSON.parse(data);
      dogs.push(dog);
      const updatedData = JSON.stringify(dogs);
      console.log(updatedData);
      fs.writeFile(__dirname + "/../data/dogs.json", updatedData, err => {
        if (err) console.log(err);
        else cb();
      });
    }
  });
}

module.exports = { readDogData, addDogData };
