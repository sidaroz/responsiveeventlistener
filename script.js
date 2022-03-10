const header = document.querySelector("#header-one");
const header2 = document.querySelector("#header2");
const body = document.querySelector("body");
const almond = document.querySelector("#almond");
const walnut = document.querySelector("#walnut");
const peanut = document.querySelector("#peanut");
const classAlmond = document.querySelector(".almonds");
const classWalnut = document.querySelector(".walnuts");
const classPeanut = document.querySelector(".peanuts");

header.addEventListener("click", function changeBackground() {
  header.style.backgroundColor = "gray";
});

header.addEventListener("mouseout", function returnBackground() {
  // highlight the mouseout target
  header.style.backgroundColor = "white";
});

header2.addEventListener("mouseover", () => {
  header2.textContent = "Hi peanut lover";
});

body.addEventListener("keydown", (keyPressed) => {
  const newPara = document.createElement("p");
  const letterUsed = keyPressed.key;
  newPara.textContent = letterUsed;
  body.append(letterUsed);
  // console.log(e);
});

almond.addEventListener("click", () => {
  if (classAlmond.style.fontWeight === "normal") {
    classAlmond.style.fontWeight = "bold";
    classAlmond.style.fontSize = "large";
  } else {
    classAlmond.style.fontWeight = "normal";
    classAlmond.style.fontSize = "medium";
  }
});

walnut.addEventListener("click", () => {
  if (classWalnut.style.fontWeight === "normal") {
    classWalnut.style.fontWeight = "bold";
    classWalnut.style.fontSize = "large";
  } else {
    classWalnut.style.fontWeight = "normal";
    classWalnut.style.fontSize = "medium";
  }
});

peanut.addEventListener("click", () => {
  if (classPeanut.style.fontWeight === "normal") {
    classPeanut.style.fontWeight = "bold";
    classPeanut.style.fontSize = "large";
  } else {
    classPeanut.style.fontWeight = "normal";
    classPeanut.style.fontSize = "medium";
  }
});

// get all the lis that are children of uls in navs
// iterate over them
//for li in navLis {
// let thePara = find the p tag with class that matches the li's id

// if (thePara.style.fontWeight === "normal") {
//   thePara.style.fontWeight = "bold";
//   thePara.style.fontSize = "large";
// } else {
//   thePara.style.fontWeight = "normal";
//   thePara.style.fontSize = "medium";
// }
