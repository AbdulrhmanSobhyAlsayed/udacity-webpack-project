function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);

  if (!inputText) {
    alert("please enter value!!");
  }
  if (!isEnglish(inputText)) {
    alert("the text must be english !!");
  }
}

function isEnglish(input) {
  let reg = new RegExp(/^[a-zA-Z0-9 ]+$/);
  return reg.test(input);
}

export { checkForName, isEnglish };
