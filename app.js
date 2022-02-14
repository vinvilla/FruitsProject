const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true});

// const fruitSchema = new mongoose.Schema ({
// name: String,
// rating: Number,
// review: String
// });

const fruitSchema = new mongoose.Schema ({
name: {
  type: String,
  required: [true,"Name not specified!"]
},
rating: {
  type: Number,
  min: 1,
  max: 10
},
review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 3,
  review: "Super fruit"
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Sometimes sour"
});

const banana = new Fruit({
  name: "Banana",
  rating: 2,
  review: "Weird Texture"
});


// fruit.save().then(() => console.log('Fruit Saved'));

const personSchema = new mongoose.Schema({
name: String,
age: Number,
favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const lemon = new Fruit({
  name: "lemon",
  rating: 9,
  review: "tangy lemon"
});

lemon.save();

Person.updateOne({name: "John"},{favoriteFruit: lemon}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Update Successful");
  }
});


// const person = new Person({
// name: "Amy",
// age: 37,
// favoriteFruit: cocunut
// });

//person.save();

Fruit.insertMany([kiwi, orange, banana],function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});


// to read
Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
//    console.log(fruits);

    // mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});


// to update
Fruit.updateOne({id: "61e66d30af4581f21a305149"},{name: "Mangoes"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Update Successful");
  }
});


 // to delete one or many
//Fruit.deleteOne({id: "61e66d1208e9dcbeffa5f540"}, function(err){
//Fruit.deleteOne({name: "Orange"}, function(err){
  Fruit.deleteMany({name: "Orange"}, function(err){
  if (err) {
    console.log(err);
  } else {
//    mongoose.connection.close();
    console.log("Delete Successful");
  }
});
