const api = "http://localhost:5000/api";

const sendData = (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email, password);
  const user = {
    email: email,
    password: password,
  };
  fetch(`${api}/test`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector(".result").innerHTML = data.Result;
    })
    .catch((err) => {
      console.log(err);
    });
};

fetch(`${api}/testget`, {
  method: "get",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("This is the error", err));

document.addEventListener("submit", sendData);
