const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2');
const dropmenu = document.querySelector('.dropmenu');
const homeContent = document.querySelector('.home-page-content');

// input field checking
const firstName = document.getElementsByClassName('firstName')[0]
const lastName = document.getElementsByClassName('lastName')[0]
const email = document.getElementsByClassName('email')[0]
const phoneNumber = document.getElementsByClassName('phoneNumber')[0]
const companyName = document.getElementsByClassName('companyName')[0]
const companyWebsite = document.getElementsByClassName('companyWebsite')[0]
const jobTitle = document.getElementsByClassName('jobTitle')[0]
const employees = document.getElementById('employees')
const request = document.getElementById("request-btn")
const form = document.getElementById("submit-form")

const contactInfo = [firstName, lastName, email, phoneNumber, companyName, companyWebsite, jobTitle, employees];

const valName = /^[a-z ,.'-]+$/i;
const valEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const valPhoneNumber = /^\d{10}$/;
const valcompanyWebsite = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;


//Error Checking Error Checking Error Checking Error Checking Error Checking Error Checking Error Checking Error Checking

contactInfo.forEach((contactItem) => {

   contactItem.onblur = function(contactItem){
      if(contactItem.target === firstName || contactItem.target === lastName || contactItem.target === jobTitle || contactItem.target === companyName ) {
         if(valName.test(contactItem.target.value)) {
            contactItem.target.classList.remove("err")
         } else {
            contactItem.target.classList.add("err")
         }
      }
   
      if(contactItem.target === email) {
         if(valEmail.test(contactItem.target.value)) {
            contactItem.target.classList.remove("err")
         } else {
            contactItem.target.classList.add("err")
         }
      }

      if(contactItem.target === phoneNumber) {
         if(valPhoneNumber.test(contactItem.target.value)) {
            contactItem.target.classList.remove("err")
         } else {
            contactItem.target.classList.add("err")
         }
      }

      if(contactItem.target === companyWebsite) {
         if(valcompanyWebsite.test(contactItem.target.value)) {
            contactItem.target.classList.remove("err")
         } else {
            contactItem.target.classList.add("err")
         }
      }

      if(contactItem.target === employees) {
         if(employees.value === "Please select") {
            employees.style.border = "1px solid red"
         } else {
            employees.style.border = "1px solid black"
         }
      }
   }  

}
)

////////

// function employeesCheck() {
//    if(employees.value == "Please select"){
//       employees.style.border = "1px solid red"
//    } else {
//       employees.style.border = "1px solid black"
//    }
   
// }

//////////////////// drop-down-menu
   
menu1.addEventListener('click', () => {

   showblock();
})

menu2.addEventListener('click', () => {
   showblock();
})


function closeNav() {
   homeContent.style.display = "block";
   dropmenu.style.height = "0%";
}

function showblock() {
   homeContent.style.display = "none";
   dropmenu.style.height = "100%";
}