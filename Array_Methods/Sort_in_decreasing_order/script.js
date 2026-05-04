let arr = [5, 2, 1, -10, 8];

function compareNumbers(a, b){
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

arr.sort(compareNumbers);

console.log(arr);

// The following is a more efficient answer:

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
// This function works in the following steps:
// 1. 5 and 2 are assigned to a and b respectively
// 2. 2 - 5 is a negative number, so 5 is greater than 2 and stays to the left of 2.
// 3. 2 and 1 are assigned to a and b.
// 4. 1 - 2 is a negative number, so 2 stays to the left of 1.
// 5. 1 and -10 are assigned to a and b.
// 6. -10 - 1 is a negative number, so 1 stays to the left of -10.
// 7. -10 and 8 are assigned to a and b.
// 8. 8 - (-10) is a positive number, so 8 is pushed to the left of -10.
// 9. 1 and 8 are assigned to a and b.
// 10. 8 - 1 is a positive number, so 8 is pushed to the left of 1.
// 11. 2 and 8 are assigned to a and b.
// 12. 8 - 2 is a positive number, so 8 is pushed to the left of 2.
// 13. 5 and 8 are assigned to a and b.
// 14. 8 - 5 is a positive number, so 8 is pushed to the left of 5.

// console.log(arr);