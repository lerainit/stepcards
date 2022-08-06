import Card from "./classes/card.js";

import createCard from "./classes/createcard.js";
import Login from "./classes/login.js";
import getUrgency from "./functions/getUrgency.js";

import createLogin from "./functions/createLogin.js";
import createCards from "./functions/createCards.js";
import renderCardsAfterReload from "./functions/renderCardsAfterReload.js";

//import VisitDentist from "./visitDentist.js";
//import VisitTherapist from "./visitTherapist.js";
//import VisitCardiologist from "./visitCardiologist";

const logOutBtn = document.querySelector('.logout_btn')

logOutBtn.addEventListener('click',() =>{

  localStorage.clear()
  document.location.reload()
 
})

//
//localStorage.setItem('lera','lera')
//localStorage.setItem('lera',1234)

const container = document.querySelector('.container')

const loginBtn = document.querySelector('.login_btn')
/*function createCards(){
new createCard().render('.container')
    
}

function createLogin(){


   const login = new Login()

 // loginBtn.removeEventListener('click',createLogin)
login.render('.container')

login.submitLogin() 

//loginBtn.addEventListener('click',createCards)
}
*/
loginBtn.addEventListener('click', createLogin)




const urgencySelect = document.querySelector('.visit_select')


//const loginBtn = document.querySelector('.login_btn')

if(localStorage.getItem('token')){

 
    renderCardsAfterReload()
}
 
