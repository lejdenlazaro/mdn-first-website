//Image changer
const myImage = document.querySelector("img");

myImage.addEventListener("mouseover", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-2.png");
    myImage.width = 256;
    myImage.height = 256;
  }
});

myImage.addEventListener("mouseout", () => {
  myImage.setAttribute("src", "images/firefox-icon.png");
  myImage.removeAttribute("width");
  myImage.removeAttribute("height");
});

//Personalized greeting
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is Cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedUserName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is Cool, ${storedUserName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
