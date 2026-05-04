function camelize(str) {
    let arr = str.split('-');
    for(i=1; i<arr.length; i++){
        if (arr[0] === ""){ arr.splice(0,1) };
        let word = arr[i].split('');
        word.splice(0, 1, word[0].toUpperCase());
        arr.splice(i, 1, word.join(""));
    }
    return arr.join('');
}

let backgroundColor = camelize("background-color");
let listStyleType = camelize("list-style-type");
let webkitTransition = camelize("-webkit-transition");

console.log(`background-color becomes ${backgroundColor}`);
console.log(`list-style-type becomes ${listStyleType}`);
console.log(`-webkit-transition becomes ${webkitTransition}`);