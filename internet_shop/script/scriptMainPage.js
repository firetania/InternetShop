// Модалка регистрации
let activeModalRegister=false;
const modalWrapperRegister=document.querySelectorAll(".modalWrapperRegister")[0]
const modalBodyRegister=document.querySelectorAll(".modalWrapperRegister__body")[0]
const modalCloseRegister=document.querySelectorAll(".modalWrapperRegister__body-close")[0]
const modalButtonRegister=document.querySelectorAll(".register-btn")

modalButtonRegister.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(modalCloseRegister)
    modalWrapperRegister.className += " modalWrapperRegister-active";
    modalBodyRegister.className += " modalWrapperRegister__body-active";
  })
})

modalCloseRegister.addEventListener("click", function (e) {
  console.log(modalCloseRegister)
  modalWrapperRegister.className = "modalWrapperRegister";
    modalBodyRegister.className = "modalWrapperRegister__body";
})

// Модалка входа
let activeModalSignIn=false;
const modalWrapperSignIn=document.querySelectorAll(".modalWrapperSignIn")[0]
const modalBodySignIn=document.querySelectorAll(".modalWrapperSignIn__body")[0]
const modalCloseSignIn=document.querySelectorAll(".modalWrapperSignIn__body-close")[0]
const modalButtonSignIn=document.querySelectorAll(".signin-btn")

modalButtonSignIn.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(modalCloseSignIn)
    modalWrapperSignIn.className += " modalWrapperSignIn-active";
    modalBodySignIn.className += " modalWrapperSignIn__body-active";
  })
})

modalCloseSignIn.addEventListener("click", function (e) {
  console.log(modalCloseSignIn)
  modalWrapperSignIn.className = "modalWrapperSignIn";
    modalBodySignIn.className = "modalWrapperSignIn__body";
})
