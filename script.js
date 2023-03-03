// First Assignment
let $userName = document.getElementById("userName");
let $userEmail = document.getElementById("userEmail");
let $userAge = document.getElementById("userAge");
let $submitbtn = document.getElementById("submitbtn");
let $userInfo = document.getElementById("userInfo");

let typeResults = function () {
  $userInfo.innerHTML = `${$userName.value} (${$userAge.value}) - ${$userEmail.value}`;
};

$submitbtn.addEventListener("click", typeResults);

// Second Assignment
let fruitIndex = 0;
let colorIndex = 0;

let allFruits = ["Apple", "Banana", "Orange", "Grapes", "Watermelon"];
let $fruitText = document.getElementById("fruitText");
let $changeColor = document.getElementById("changeColor");
let $changeBorderStyle = document.getElementById("changeBorderStyle");
let $changeBorderColor = document.getElementById("changeBorderColor");
let $changeFruit = document.getElementById("changeFruit");
let allColors = ["red", "green", "Orange", "blue", "yellow"];
let allBordersStyles = ["dotted", "dashed", "solid"];
let $borderStyle = "dashed";
let $borderColor = "green";

$fruitText.innerHTML = allFruits[fruitIndex];
$fruitText.style.backgroundColor = allColors[colorIndex];
$fruitText.style.border = `thick ${$borderStyle} ${$borderColor}`;

// Change the name of fruit
let showFruitText = function () {
  if (fruitIndex < 4) {
    fruitIndex++;
    $fruitText.innerHTML = allFruits[fruitIndex];
  } else {
    fruitIndex = 0;
    $fruitText.innerHTML = allFruits[fruitIndex];
  }
};
$changeFruit.addEventListener("click", showFruitText);
// End Change the name of fruit

// Change background color
let changeFruitTextColor = function () {
  if (colorIndex < 4) {
    colorIndex++;
    $fruitText.style.backgroundColor = allColors[colorIndex];
  } else {
    colorIndex = 0;
    $fruitText.style.backgroundColor = allColors[colorIndex];
  }
};
$changeColor.addEventListener("click", changeFruitTextColor);
// End Change background color

// Build Border
let buildBorder = function (_style, _color) {
  $fruitText.style.border = `thick ${_style} ${_color}`;
};
// End Build Border

// Change Border Style
let changeFruitTextBorderStyle = function () {
  let borderStyleIndex = allBordersStyles.indexOf($borderStyle);

  if (borderStyleIndex <= allBordersStyles.length + 1) {
    borderStyleIndex++;
    $borderStyle = allBordersStyles[borderStyleIndex];
    buildBorder($borderStyle, $borderColor);
    console.log(borderStyleIndex);
  }
};
$changeBorderStyle.addEventListener("click", changeFruitTextBorderStyle);
// End Change Border Style

// Change Border color
let changeFruitTextBorderColor = function () {
  let borderColorIndex = allColors.indexOf($borderColor);

  if (borderColorIndex <= allColors.length + 1) {
    borderColorIndex++;
    $borderColor = allColors[borderColorIndex];
    buildBorder($borderStyle, $borderColor);
    console.log(borderColorIndex);
  }
};
$changeBorderColor.addEventListener("click", changeFruitTextBorderColor);
// End Change Border color
