/* =====================================
   POP THE LOOK - JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded", function(){



/* =========================
   SEARCH PLACEHOLDER ANIMATION
========================= */


const placeholders = [
    "Search dresses...",
    "Search outerwear...",
    "Search tops...",
    "Search accessories...",
    "Search bottoms..."
];


const placeholder = document.querySelector(".search-placeholder");

let placeholderIndex = 0;


setInterval(()=>{


    if(placeholder){

        placeholder.style.opacity = "0";


        setTimeout(()=>{


            placeholderIndex =
            (placeholderIndex + 1) %
            placeholders.length;


            placeholder.textContent =
            placeholders[placeholderIndex];


            placeholder.style.opacity = "1";


        },250);


    }


},2500);







/* =========================
   ACCOUNT DROPDOWN
========================= */


const accountBtn =
document.querySelector("#accountBtn");


const accountDropdown =
document.querySelector(".account-dropdown");



if(accountBtn){


accountBtn.addEventListener("click",()=>{


    accountDropdown.classList.toggle("active");


});


}





document.addEventListener("click",(event)=>{


if(
accountDropdown &&
!accountDropdown.contains(event.target) &&
!accountBtn.contains(event.target)

){

accountDropdown.classList.remove("active");


}


});









/* =========================
   SIGN IN PAGE OPEN/CLOSE
========================= */


const openSignin =
document.querySelector("#openSignin");


const signinPage =
document.querySelector(".signin-page");


const closeSignin =
document.querySelector("#closeSignin");



if(openSignin){


openSignin.addEventListener("click",()=>{


signinPage.classList.add("active");


accountDropdown.classList.remove("active");


});


}



if(closeSignin){


closeSignin.addEventListener("click",()=>{


signinPage.classList.remove("active");


});


}








/* =========================
   SHOW PASSWORD
========================= */


const password =
document.querySelector("#password");


const showPassword =
document.querySelector("#showPassword");



if(showPassword){


showPassword.addEventListener("click",()=>{


if(password.type==="password"){


password.type="text";

showPassword.textContent="HIDE";


}else{


password.type="password";

showPassword.textContent="SHOW";


}


});


}







/* =========================
   BAG BUTTON
========================= */


const bagButton =
document.querySelector(".bag");



const bagCount =
document.querySelector(".bag-count");



if(bagButton){


bagButton.addEventListener("click",()=>{


showToast(
`Bag (${bagCount.textContent}) — checkout preview`
);


});


}







/* =========================
   CATEGORY BUTTONS
========================= */


const categoryButtons =
document.querySelectorAll(".category-bar button");



categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


categoryButtons.forEach(btn=>
btn.classList.remove("active")
);



button.classList.add("active");



showToast(
button.textContent + " — curated"
);



});


});









/* =========================
   TOAST MESSAGE
========================= */


function showToast(message){


let toast =
document.querySelector(".toast");



if(toast){


toast.textContent=message;


toast.classList.add("show");



setTimeout(()=>{


toast.classList.remove("show");


},2500);



}


}





});
