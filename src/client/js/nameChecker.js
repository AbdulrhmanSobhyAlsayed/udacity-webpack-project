function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);

  if (isInputNumber(inputText)) {
    alert("No number Please Enter String!!");
  }
}

function isInputNumber(input) {
  let reg = new RegExp(/^\d+$/);
  return reg.test(input);
}

export { checkForName, isInputNumber };
