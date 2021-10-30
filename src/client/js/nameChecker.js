function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);

  if (!inputText) {
    alert("please enter value!!");
    return false;
  }
  if (!isEnglish(inputText)) {
    alert("the text must be english !!");
    return false;
  }
  return true;
}

function isEnglish(input) {
  let reg = new RegExp(/^[a-zA-Z0-9 ]+$/);
  return reg.test(input);
}

export { checkForName, isEnglish };
