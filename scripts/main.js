// Task 1
console.log("Task 1------------------------------------------");
for (let i=1; i<=10; i++){
    console.log(i + " squared is " + i*i);
}

// Task 2
console.log("Task 2------------------------------------------");
for (let i=5; i>=1; i--){
    console.log(i);
}
console.log('Blastoff!')

// Task 3
console.log("Task 3------------------------------------------");
for (let i=1; i<=50; i+=2){
    console.log(i);
}

// Task 4
console.log("Task 4------------------------------------------")
console.log("gauss way: 100*(100+1)/2 =" + 100*(100+1)/2);
console.log("for loop way: ");
let total = 0;
for (let i=1; i<=100; i++){
    total = total + i;
}
console.log(total);

// Task 5
console.log("Task 5------------------------------------------");
let factorial = 1;
for (let i=1; i<=10; i++){
    factorial = i;
    for (let j=i; j>=2; j--){
        factorial = factorial * (j-1);
    }
    console.log(i + "! = " + factorial);
}

// Task 6
console.log("Task 6------------------------------------------");
let arr = [3,1,4,1,5];
for (i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// Task 7
console.log("Task 7------------------------------------------");
let arr7 = [3,1,4,1,5];
for (i=1; i<=arr7.length; i++){
    console.log(arr7.at(-i));
}

// Task 8
console.log("Task 8------------------------------------------");
let emparr8 = [];
for (i=1; i<=10; i++){
    emparr8.push(i*i*i);
}
console.log(emparr8);

// Task 9
console.log("Task 9------------------------------------------");
let emparr9 = [];
let var1 = 0;
let var2 = 0;
let alternator = 1;
for (i=1; i<=10; i++){
    emparr9.push(var1+var2);
    if (alternator < 0){
        var1 = var1 + var2;
    }
    else if (alternator > 0){
        var2 = var1 + var2;
    }
    alternator = alternator * -1;
    if (var1 + var2 == 0){
        var1 = 1;
    }
}
console.log(emparr9);

let emparr91 = [];
for (i=0; i<=9; i++){
    if (i==0 || i==1){ //just a lil || logic
        emparr91.push(i);
    }
    if (i>=2) {
        emparr91.push(emparr91.at(-1) + emparr91.at(-2));
    }
}
console.log("Less variables method: [" + emparr91 + "]");

// Task 10
console.log("Task 10------------------------------------------");
let emparr10 = [];
let arr10 = [3,1,4,1,5];
for (i=-1; i>=-5; i--){
    emparr10.push(arr10.at(i));
}
console.log(emparr10);


// May 5 Tasks
console.log("May 5 tasks loaded");

let colors = ["black", "orange", "tan", "silver", "maroon", "lime", "olive"];
let unList = document.createElement(ul);
let listItem = 0
for (i = 0; i<colors.length; i++){
    listItem = document.createElement(li);
    listItem.innerText(colors[i]);
    listItem.style.color = colors[i];
    unList.appendChild(listItem);
}
document.body.appendChild(unList);