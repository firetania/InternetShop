// Модалка выхода
let activeModalSignOut=false;
const modalWrapperSignOut=document.querySelectorAll(".modalWrapperSignOut")[0]
const modalBodySignOut=document.querySelectorAll(".modalWrapperSignOut__body")[0]
const modalCloseSignOut=document.querySelectorAll(".modalWrapperSignOut__body-close")[0]
const modalButtonSignOut=document.querySelectorAll(".signout-btn")

modalButtonSignOut.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(modalCloseSignOut)
    modalWrapperSignOut.className += " modalWrapperSignOut-active";
    modalBodySignOut.className += " modalWrapperSignOut__body-active";
  })
})

modalCloseSignOut.addEventListener("click", function (e) {
  console.log(modalCloseSignOut)
  modalWrapperSignOut.className = "modalWrapperSignOut";
    modalBodySignOut.className = "modalWrapperSignOut__body";
})