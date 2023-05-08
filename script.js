const fname = document.getElementById("fName");
const idNumber = document.getElementById("IDN");
const age = document.getElementById("age");
const email = document.getElementById("Email");
const newList = document.querySelector(".show-side");

var items = fname.value + idNumber.value + age.value + email.value;
var list = [];

document.getElementById("send").addEventListener("click", function () {
  if (
    fname.value === "" ||
    idNumber.value === "" ||
    email.value === "" ||
    age.value === ""
  ) {
    alert("Please complete all boxes before submitting");
  } else if (fname.value.length < 5) {
    alert("your name must be at least 4 characters long");
  } else if (fname.value.length > 20) {
    alert("your name must be at most 20 characters long");
  } else if (age.value < 1 || age.value > 130) {
    alert("please enter a valid age");
  } else if (isNaN(idNumber.value)) {
    alert("ID Number must be entered by number keys");
  } else if (isNaN(age.value)) {
    alert("age must be entered by number keys");
  } else if (idNumber.value.length !== 10) {
    alert("Please enter a valid ID Number");
  } else if (checkIdNumber(idNumber.value)) {
    alert("Your ID number has been submitted before");
  } else {
    list.push(
      fname.value +
        " / " +
        idNumber.value +
        " / " +
        age.value +
        " / " +
        email.value
    );
    addItem();
  }
});

function addItem() {
  newList.innerHTML = "";
  list.forEach(function (listItem, i) {
    newList.innerHTML += `<img id="delete" src="icons8-delete.svg" onclick="deleteItem(${i})"><p>${listItem}</p>`;
  });
  console.log(list);
}

function deleteItem(i) {
  list.splice(i, 1);
  addItem();
}

function checkIdNumber(idNum) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].split(" / ")[1] === idNum) {
      return true;
    }
  }
  return false;
}

document.getElementById("fName").addEventListener("input", function () {
  if (fname.value.length < 3 || fname.value.length > 20) {
    document.getElementById("nameError").innerHTML =
      "name must be between 3 and 20 characters long";
    document.getElementById("nameError").style.background = "red";
  } else if (fname.value.length == 3 || fname.value.length == 20) {
    document.getElementById("nameError").innerHTML = "";
  }
});
