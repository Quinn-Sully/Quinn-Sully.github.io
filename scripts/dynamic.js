// May 5 Tasks
console.log("May 5 tasks loaded");

let colors = ["black", "orange", "tan", "silver", "maroon", "lime", "olive"];
let unList = document.createElement("ul");
let listItem = 0
for (i = 0; i<colors.length; i++){
    listItem = document.createElement("li");
    listItem.innerText = colors[i];
    listItem.style.color = colors[i];
    unList.appendChild(listItem);
}
document.body.appendChild(unList);