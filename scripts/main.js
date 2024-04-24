// Task 1
console.log("Task 1");
for (let i=1; i<=10; i++){
    console.log(i + "squared is " + i*i);
}

// Task 2
console.log("Task 2");
for (let i=5; i>=1; i--){
    console.log(i);
}
console.log('Blastoff!')

// Task 3
console.log("Task 3");
for (let i=1; i<=50; i=i+2){
    console.log(i);
}

// Task 4
console.log("Task 4")
console.log("gauss way: " + 100*(100+1)/2);
console.log("for loop way: ");
let total = 0;
for (let i=1; i<=100; i++){
    total = total + i;
}
console.log(total);

// Task 5
console.log("Task 5");
let factorial = 1;
for (let i=1; i<=10; i++){
    factorial = i;
    for (let j=i; j>=2; j--){
        factorial = factorial * (j-1);
    }
    console.log(i + " factorial = " + factorial);
}