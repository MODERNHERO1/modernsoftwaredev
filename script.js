
const notification = document.querySelector(".notification");
const notificationBar = document.querySelector(".notification-bar");

notification.addEventListener("click", (event) => {
    event.stopPropagation();
    notificationBar.style.transform = "translateY(23%)";

});

window.addEventListener("click", (event) => {
    const notificationClicked = notification.contains(event.target) || notificationBar.contains(event.target);
    if (!notificationClicked) {
        notificationBar.style.transform = "translateY(-100%)";
    }
});

const chatSidebar = document.querySelector(".chat-sidebar");
const liveChart = document.querySelector(".live-chart");

liveChart.addEventListener("click", (event) => {
    event.stopPropagation();
    chatSidebar.style.transform = "translateY(23%)";
});

window.addEventListener("click", (event) => {
    const liveChartClicked = chatSidebar.contains(event.target) || liveChart.contains(event.target);
    if (!liveChartClicked) {
        chatSidebar.style.transform = "translateY(-100%)";
    }
});




var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Fullstark Developer" , "Web Developer" , "Expert Advisor Builder" , "Website Maintenance" , "Website Builders & CMS" , "Website Development"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

/*var moreHomeBtn = document.getElementById("more-home-btn"),
      morehomeText = document.getElementById("more-home-text");

  moreHomeBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (morehomeText.style.display === "none") {
      morehomeText.style.display = "block";
      moreHomeBtn.innerHTML = "Read less";
    } else {
      morehomeText.style.display = "none";
      moreHomeBtn.innerHTML = "Read more";
    }
  }, false);
morehomeText.style.display = "none";

  var moreAboutBtn = document.getElementById("more-about-btn"),
      moreAboutText = document.getElementById("more-about-text");

  moreAboutBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (moreAboutText.style.display === "none") {
      moreAboutText.style.display = "block";
      moreAboutBtn.innerHTML = "Read less";
    } else {
      moreAboutText.style.display = "none";
      moreAboutBtn.innerHTML = "Read more";
    }
  }, false);
moreAboutText.style.display = "none";*/

    function seePassword(id, icon) {
      const field = document.getElementById(id);
      if (field.type === "password") {
        field.type = "text";
        icon.textContent = "🙈";
      } else {
        field.type = "password";
        icon.textContent = "👁️";
      }
    }

  
    const registerForm = document.getElementById('registerForm')
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      alert("Form submitted!");
       register.style.display = "none";

    });

const registerBtn = document.querySelector(".register-btn");
const register = document.querySelector(".register");
const registerBtnfbs = document.querySelector(".register-btnfbs");


registerBtn.addEventListener("click", (event)=> {
    event.preventDefault();
   register.style.display = "flex";
});
registerBtnfbs.addEventListener("click", (event)=> {
    event.preventDefault();
   register.style.display = "flex";
});


window.addEventListener("click", (event)=> {
   const isRegisterClick = registerForm.contains(event.target) || registerBtn.contains(event.target) || registerBtnfbs.contains(event.target);
   if (!isRegisterClick) {
        setTimeout(()=>{ register.style.display = "none"; }, 300)
   }
});
register.style.display = "none";


//LOGIN SCRIPT
    function togglePassword(id, icon) {
      const field = document.getElementById(id);
      if (field.type === "password") {
        field.type = "text";
        icon.textContent = "🙈";
      } else {
        field.type = "password";
        icon.textContent = "👁️";
      }
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Remove this if connecting to backend
      alert("Login submitted!");
    });


const loginBtn = document.querySelector(".login-btn");
const login= document.querySelector(".login");
const loginBtnfbs = document.querySelector(".login-btnfbs");


loginBtn.addEventListener("click", (event)=> {
    event.preventDefault();
   login.style.display = "flex";
});
loginBtnfbs.addEventListener("click", (event)=> {
    event.preventDefault();
   login.style.display = "flex";
});


window.addEventListener("click", (event)=> {
    if (!loginForm.contains(event.target) && !loginBtn.contains(event.target) && !loginBtnfbs.contains(event.target)){
        setTimeout(()=>{
            login.style.display = "none";
        }, 300)
    }
})

login.style.display = "none";


//MENU BUTTON
const menuButton = document.querySelector(".menu-button");
const menuSidebar = document.querySelector(".menu-sidebar");

let isClicked = false;
menuButton.addEventListener("click", (event)=> {
  event.preventDefault();
  if (!isClicked) {
    menuSidebar.style.transform = "translateX(4%)";
    menuSidebar.classList.add("open");
    menuButton.classList.add("toggled");
    isClicked = true;
  const bodyOverlay = document.createElement("div")
  bodyOverlay.classList.add("overlay");
  setTimeout(()=>{
    document.querySelector("body").append(bodyOverlay);
  }, 300);
}else {
  closeMenu();
}
});

window.addEventListener("click", (event)=>{
  const isMenuClick = menuSidebar.contains(event.target) || menuButton.contains(event.target);
  if (!isMenuClick){
    closeMenu(); 
  }
});

function closeMenu(){
  menuSidebar.style.transform = "translateX(-100%)";
  menuSidebar.classList.remove("open");
  menuButton.classList.remove("toggled");
  const bodyOverlay = document.querySelector(".overlay");
 if (bodyOverlay) {
   document.querySelector("body").removeChild(bodyOverlay);
 }
 isClicked = false;
}
