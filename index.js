const { faker } = require('@faker-js/faker');
const fs = require('fs');

let fullList = [];

(function() {
    for (let i = 0; i < 1000; i++) {
        fullList.push(faker.name.fullName());
    }
})();
  
fullList = fullList.join("\n") 

fs.writeFile("./nuevo.txt", fullList, err => {
    if (err){
        return console.log(err);
    }
    else{
        console.log("El archivo fue creado correctamente");
    }
});
