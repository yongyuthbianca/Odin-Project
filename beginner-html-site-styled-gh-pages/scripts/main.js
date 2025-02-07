const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MasonFlowers.JPG") {
    myImage.setAttribute("src", "images/Screenshot 2025-01-31 121356.png");
  } else {
    myImage.setAttribute("src", "images/MasonFlowers.JPG");
  }
});
