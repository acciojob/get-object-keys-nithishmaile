//your JS code here. If required.
// Create the student object
const student = {
  name: "John",
  age:30,
  city:"New York";
};

// Function to get all keys from the object
Object.prototype.getKeys=function(){
	return Object.keys(this)
}
// Testing the function
console.log(getKeys(student)); // Output: ["name"]
