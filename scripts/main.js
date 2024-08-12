var image = document.querySelector("img");

image.onclick = function(){
    var src = image.getAttribute("src");
    if(src === "images/1_1screenshot15.png"){
        image.setAttribute("src", "images/stardew.jpg");
    }
    else{
        image.setAttribute("src", "images/1_1screenshot15.png")
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Пожалуйства введите своё имя.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Добро пожаловать, " + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Добро пожаловать, " + storedName;
}   

myButton.onclick = function(){
    setUserName();
}