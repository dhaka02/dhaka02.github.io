const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sample.jpg") {
    myImage.setAttribute("src", "images/sample2.jpg");
  } else {
    myImage.setAttribute("src", "images/sample.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  