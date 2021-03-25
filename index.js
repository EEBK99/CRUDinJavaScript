const nameInput = document.getElementById("name_input");
const emailInput = document.getElementById("email_input");
const btnAddUser = document.getElementById("btn_add_user");
const btnUpdateUser = document.getElementById("btn_update_user");
const btnDeleteUser = document.getElementById("btn_delete_user");
const btnViewUser = document.getElementById("btn_view_user");
const usersUl = document.getElementById("users_ul");

// // creating varaibles for inputfield value get
// let userName = "",
//   userEmail = "";

const userJsonStorage = localStorage.getItem("userList");
const JSONToUser = JSON.parse(userJsonStorage);
// created user list to get data temporarly in this list
// first it checks list from JSONToUser, if not then it checks from [] because || is placed
let userList = JSONToUser || [];

// now creating class for user to set and get data for overall data use
class classUser {
  id;
  name;
  email;

  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
// // getting values from inputfields to variable
// nameInput.addEventListener("input", function (e) {
//   //   userName = e.target.addEventListener;
//   userName = e.target.value;
// });
// emailInput.addEventListener("input", function (e) {
//   //   userEmail = e.target.addEventListener;
//   userEmail = e.target.value;
// });

// creating event handler for add button
btnAddUser.addEventListener("click", function () {
  // console value to check either values is fetched or not
  // console.log(nameInput.textContent);
  // console.log(emailInput.textContent);
  // console.log(userName);
  // console.log(userEmail);
  // const varuser = new classUser(userName, userEmail);
  const varuser = new classUser(Date.now(), nameInput.value, emailInput.value);
  userList.push(varuser);
  // creating json file format for data
  const userJsonStorage = JSON.stringify(userList);
  // setting values in local storage of browser
  localStorage.setItem("userList", userJsonStorage);
  console.log(userList);
});

btnUpdateUser.addEventListener("click", function () {
  classUser = userList.map((classUser) => {
    if (classUser.email == emailInput.value) {
      classUser.name = nameInput.value;
    }
  });
  const userJsonStorage = JSON.stringify(userList);
  localStorage.setItem("userList", userJsonStorage);
});

btnDeleteUser.addEventListener("click", function () {
  //   // simple function
  //   function fn(name) {
  //     return name;
  //   }
  //   // Es6 javascript function
  //   let es6func = (name) => {
  //     return name;
  //   };
  //   es6func = (name) => {
  //     return name;
  //   };

  userList = userList.filter((classUser) => {
    return classUser.email != emailInput.value;
  });
  console.log(userList);
  const userJsonStorage = JSON.stringify(userList);
  localStorage.setItem("userList", userJsonStorage);
});

btnViewUser.addEventListener("click", function () {
  funcShowUsers();
});

function funcShowUsers() {
  const userJsonStorage = JSON.stringify(userList);
  localStorage.setItem("userList", userJsonStorage);

  for (let i = 0; i < userList.length; i++) {
    console.log(userList[i].name, userList[i].email);
    const liItem = document.createElement("li");
    liItem.textContent = userList[i].name + " ( " + userList[i].email + " ) ";
    // liItem.textContent = "${userList[i].name}  (   ${userList[i].email}  )";
    usersUl.appendChild(liItem);
  }
}
