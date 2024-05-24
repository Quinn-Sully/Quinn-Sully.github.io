let historyContent = document.getElementById("history-content");
let button2021 = document.getElementById("2021Button");
let button2022 = document.getElementById("2022Button")
let button2023 = document.getElementById("2023Button")

function changeBodyTo2021(){
    historyContent.innerHTML = "<div><strong>2021-2022</strong><p>This is the content for 2021-2022</p></div>";
}

function changeBodyTo2022(){
    historyContent.innerHTML = "<div><strong>2022-2023</strong><p>This is the content for 2022-2023</p></div>";
}

function changeBodyTo2023(){
    historyContent.innerHTML = "<div><strong>2023-2024</strong><p>This is the content for 2023-2024</p></div>";
}

button2021.addEventListener("click", changeBodyTo2021);
button2022.addEventListener("click", changeBodyTo2022);
button2023.addEventListener("click", changeBodyTo2023);