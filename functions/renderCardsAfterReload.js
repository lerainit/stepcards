
import Card from "../classes/card.js"
import createLogin from "./createLogin.js"
import createCards from "./createCards.js"


function renderCardsAfterReload(){
    let cardsArr = JSON.parse(localStorage.getItem('cards'))
    
    console.log(cardsArr)

    
      
     cardsArr.forEach(el =>{
    
      
      
         new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container')
      })
      const loginBtn = document.querySelector('.login_btn')
    loginBtn.innerHTML = 'Cоздать новую карту'
      loginBtn.removeEventListener('click',createLogin)

     loginBtn.addEventListener('click',createCards)
    
    
    
    
    }

    export default renderCardsAfterReload
