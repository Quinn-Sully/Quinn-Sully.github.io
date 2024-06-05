//This is where the history buttons are handled

//Setup for where history content appears and which button is which

let historyContent = document.getElementById("history-content");
let button2021 = document.getElementById("2021Button");
let button2022 = document.getElementById("2022Button")
let button2023 = document.getElementById("2023Button")

//Changes the history-content div to display the 2021-2022 information

function changeBodyTo2021(){
    historyContent.innerHTML = "<div><strong>2021-2022</strong><p>This would be the content for the 2021-2022 school year, but again, I didn't have the time or motivation to do a whole write up for all of the years</p></div>";
}

//Changes the history-content div to display the 2022-2023 information

function changeBodyTo2022(){
    historyContent.innerHTML = "<div><strong>2022-2023</strong><p>This would be the content for the 2022-2023 school year, but again, I didn't have the time or motivation to do a whole write up for all of the years</p></div>";
}

//Changes the history-content div to display the 2023-2024 information

function changeBodyTo2023(){
    historyContent.innerHTML = "<div><strong>2023-2024</strong><p>This would be the content for the 2023-2024 school year, but again, I didn't have the time or motivation to do a whole write up for all of the years</p></div>";
}

//Here are the event listeners that cause the buttons to do what they need to do

button2021.addEventListener("click", changeBodyTo2021);
button2022.addEventListener("click", changeBodyTo2022);
button2023.addEventListener("click", changeBodyTo2023);