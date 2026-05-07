let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = grabNames(users);

function grabNames(users) {
    let returnedNames = [];
    for(i=0;i<users.length;i++){
        returnedNames.push(` ${users[i].name}`);
    }
    return returnedNames;
}

alert( names ); // John, Pete, Mary