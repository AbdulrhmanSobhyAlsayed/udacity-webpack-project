import { json } from "body-parser";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  getLang(formText).then(function (data) {
    document.getElementById("results").innerHTML = data.text;
    document.getElementById("name").value = "";
    return;
  });
}

function getLang(formText) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8081/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: formText }),
    })
      .then(function (response) {
        return resolve(response.json());
      })
      .catch((err) => reject(err));
  });
}

export { handleSubmit, getLang };
