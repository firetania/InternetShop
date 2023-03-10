// Вспомогательная функция для статуса
const statusBtnFunc = (isLogged) => {
  const buttonsWrapper=document.querySelectorAll(".header__entrance__actions")[0]

  if (!isLogged) {
    buttonsWrapper.innerHTML=`
    <button class="header__entrance__firstline-btn btn register-btn">
      Зарегистрироваться
    </button>
    <button class="header__entrance-btn btn signin-btn">Войти</button>
    `
  } else {
    buttonsWrapper.innerHTML=`
    <button class="header__entrance__firstline-btn btn signout-btn">
      Выйти
    </button>
    `
  }

  if (!isLogged){
    // Модалка входа
    let activeModalSignIn=false;
    const modalWrapperSignIn=document.querySelectorAll(".modalWrapperSignIn")[0]
    const modalBodySignIn=document.querySelectorAll(".modalWrapperSignIn__body")[0]
    const modalCloseSignIn=document.querySelectorAll(".modalWrapperSignIn__body-close")[0]
    const modalButtonSignIn=document.querySelectorAll(".signin-btn")
    const modalWrapperContentSignIn=document.querySelectorAll(".modalWrapperSignIn__body__content__button")[0]

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

    modalWrapperContentSignIn.addEventListener("click", function (e) {
      modalWrapperSignIn.className = "modalWrapperSignIn";
      modalBodySignIn.className = "modalWrapperSignIn__body";
    })
  }
}

// Модалка выхода функция
const modalSignOutFunc = () => {
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

  const modalWrapperContentSignOut=document.querySelectorAll(".modalWrapperSignOut__body__content__button")[0]

  modalWrapperContentSignOut.addEventListener("click", function (e) {
    modalWrapperSignOut.className = "modalWrapperSignOut";
    modalBodySignOut.className = "modalWrapperSignOut__body";
  })
}

// Для запоминания статуса пользователя
let isLogged=false;


const modalWrapperContentSignIn=document.querySelectorAll(".modalWrapperSignIn__body__content__button")[0]

modalWrapperContentSignIn.addEventListener("click", function (e) {
  isLogged=true;
  statusBtnFunc(isLogged);
  if (isLogged){
    modalSignOutFunc();
  }
})


const modalWrapperContentSignOut=document.querySelectorAll(".modalWrapperSignOut__body__content__button")[0]

modalWrapperContentSignOut.addEventListener("click", function (e) {
  isLogged=false;
  statusBtnFunc(isLogged);
})

statusBtnFunc(isLogged)

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

// Модалка выхода
// const modalSignOutFunc = () => {
//   let activeModalSignOut=false;
//   const modalWrapperSignOut=document.querySelectorAll(".modalWrapperSignOut")[0]
//   const modalBodySignOut=document.querySelectorAll(".modalWrapperSignOut__body")[0]
//   const modalCloseSignOut=document.querySelectorAll(".modalWrapperSignOut__body-close")[0]
//   const modalButtonSignOut=document.querySelectorAll(".signout-btn")

//   modalButtonSignOut.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       console.log(modalCloseSignOut)
//       modalWrapperSignOut.className += " modalWrapperSignOut-active";
//       modalBodySignOut.className += " modalWrapperSignOut__body-active";
//     })
//   })

//   modalCloseSignOut.addEventListener("click", function (e) {
//     console.log(modalCloseSignOut)
//     modalWrapperSignOut.className = "modalWrapperSignOut";
//       modalBodySignOut.className = "modalWrapperSignOut__body";
//   })
// }

