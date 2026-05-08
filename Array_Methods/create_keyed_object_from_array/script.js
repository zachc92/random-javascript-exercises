let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce((obj, value) => {
    console.log(value);
    obj[value.id] = value;
    console.log(obj);
    return obj;
  }, {})
};

// console.log(usersById)

/*
// after the call we should have:

Initialization: The reduce method starts with an empty object ({}) as its initial value (the obj variable).
Iteration: It loops through each element (value) of the users array one by one.
Assignment: Inside the loop, it creates a new key in the obj using the user's id (e.g., 'john'). It sets the value of that key to be the entire user object itself.
Accumulation: It returns the updated obj to be used for the next element in the array.
Completion: Once the loop finishes, usersById becomes a structured object that looks like this:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/