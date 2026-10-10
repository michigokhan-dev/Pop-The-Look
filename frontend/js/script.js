// ELEMENTS

const accountBtn = document.getElementById("accountBtn");
const accountDropdown = document.getElementById("accountDropdown");

const signinOpen = document.getElementById("signinOpen");
const signinPage = document.getElementById("signinPage");
const closeSignin = document.getElementById("closeSignin");

const signOut = document.getElementById("signOut");

const showPassword = document.getElementById("showPassword");
const passwordInput = document.getElementById("passwordInput");

const toast = document.getElementById("toast");

const searchInput = document.getElementById("searchInput");
const searchPlaceholder = document.getElementById("searchPlaceholder");

const wishlistBtn = document.getElementById("wishlistBtn");
const bagBtn = document.getElementById("bagBtn");
const shopButton = document.getElementById("shopButton");




// ACCOUNT DROPDOWN

accountBtn.addEventListener("click", () => {

    accountDropdown.classList.toggle("active");

});



// CLOSE DROPDOWN WHEN CLICK OUTSIDE

document.addEventListener("mousedown", (e) => {

    if(
        !accountDropdown.contains(e.target) &&
        !accountBtn.contains(e.target)
    ){

        accountDropdown.classList.remove("active");

    }

});





// OPEN SIGN IN

signinOpen.addEventListener("click", () => {

    accountDropdown.classList.remove("active");

    signinPage.classList.remove("hidden");

});





// SIGN OUT BUTTON

signOut.addEventListener("click", () => {

    accountDropdown.classList.remove("active");

    signinPage.classList.remove("hidden");

});





// CLOSE SIGN IN

closeSignin.addEventListener("click", () => {

    signinPage.classList.add("hidden");

});






// PASSWORD SHOW / HIDE

showPassword.addEventListener("click", () => {


    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        showPassword.textContent = "HIDE";


    } else {


        passwordInput.type = "password";

        showPassword.textContent = "SHOW";


    }


});







// TOAST FUNCTION

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(()=>{

        toast.classList.remove("show");

    },2200);


}





// PLACEHOLDER BUTTON ACTIONS

wishlistBtn.addEventListener("click",()=>{

    showToast("WISHLIST — COMING SOON");

});


bagBtn.addEventListener("click",()=>{

    showToast("BAG — COMING SOON");

});


shopButton.addEventListener("click",()=>{

    showToast("SHOP NOW — COMING SOON");

});







// SEARCH PLACEHOLDER ANIMATION

const placeholders = [

"Search dresses...",

"Search outerwear...",

"Search tops...",

"Search accessories...",

"Search bottoms..."

];


let placeholderIndex = 0;



setInterval(()=>{


    if(searchInput.value !== "") return;


    searchPlaceholder.classList.add("fade");


    setTimeout(()=>{


        placeholderIndex++;


        if(placeholderIndex >= placeholders.length){

            placeholderIndex = 0;

        }


        searchPlaceholder.textContent = placeholders[placeholderIndex];


        searchPlaceholder.classList.remove("fade");


    },250);



},2500);





// REGISTER BUTTON

const registerButton = document.getElementById("registerButton");


registerButton.addEventListener("click",()=>{

    showToast("REGISTER — COMING SOON");

});





// SIGN IN BUTTON

const loginButton = document.getElementById("loginButton");


loginButton.addEventListener("click",()=>{

    showToast("SIGNED IN — COMING SOON");

});
