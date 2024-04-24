var openHam = document.querySelector("#openHam");
var closeHam = document.querySelector("#closeHam");
var navigationItems = document.querySelector("#navigation-items");

var hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
}; 

openHam.addEventListener("click" , function(event){
    event.preventDefault();
    hamburgerEvent("flex" , "block" , "none");
    console.log("I just got clicked")
});
closeHam.addEventListener("click" , function(event){
    event.preventDefault(); 
    hamburgerEvent("none" , "none" , "block");
});