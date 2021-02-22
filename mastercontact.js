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



firstName.onblur = function(e) {
const valName = /^[a-zA-Z]+ [a-zA-Z]+$/;

   if(!valName.test(e.target.value)) {
      firstName.classList.add('err')
   } else {
      firstName.classList.add('corr')
   }
}


lastName.onblur = function(e) {
const valName = /^[a-zA-Z]+ [a-zA-Z]+$/;

   if(!valName.test(e.target.value)) {
      lastName.classList.add('err')
   }
}

email.onblur = function(e) {
   const valEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
   
      if(!valEmail.test(e.target.value)) {
         email.classList.add('err')
      }
   }

phoneNumber.onblur = function(e) {
const valPhoneNumber = /^\d{10}$/;
   
   if(!valPhoneNumber.test(e.target.value)) {
      phoneNumber.classList.add('err')
   }
}

companyName.onblur = function(e) {
const valcompanyName = /^\d{10}$/;
      
   if(!valcompanyName.test(e.target.value)) {
      companyName.classList.add('err')
   }
}

companyWebsite.onblur = function(e) {
const valcompanyWebsite = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
         
   if(!valcompanyWebsite.test(e.target.value)) {
      companyWebsite.classList.add('err')
   }
}

jobTitle.onblur = function(e) {
   const valjobTitle = /^[a-zA-Z]+ [a-zA-Z]+$/;
            
      if(!valjobTitle.test(e.target.value)) {
         jobTitle.classList.add('err')
      }
   }






