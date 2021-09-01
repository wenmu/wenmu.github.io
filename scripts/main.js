let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
myHeading.textContent = "Hello World!!";

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-ios.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

function setUserName() {
  let myName = prompt("Enter your name:");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎来到firefox社区" + myName;
  }
}

myButton.onclick = function () {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "欢迎来到firefox社区" + storedName;
}
