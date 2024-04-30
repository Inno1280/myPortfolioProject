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

// sending the email from the contact page

 

function sendMail(){
    let parameters = {
        name : document.getElementById("namevalue").value,
        email : document.getElementById("emailvalue").value,
        subject : document.getElementById("subjectvalue").value,
        message : document.getElementById("messagevalue").value,
    }; 

    let replyOption = {
        reply_to: parameters.email
    };

    // To handle the sending of the email
    emailjs.send("service_nnasco1280" , "template_9eibr4w" , parameters, replyOption).then(function() {
        showSuccessAlert();
        resetAction();   
        
    })
    
    
}

// Code handling the success state
function showSuccessAlert() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    document.head.appendChild(script);
    script.onload = function() {
        Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success"
        });  
    };
}

// Code handling the error state
function showErrorAlert() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    document.head.appendChild(script);
    script.onload = function() {
        Swal.fire({
        title: "Error!",
        text: "An Error occured while sending your message. Please try again later!",
        icon: "Error"
        });  
    };
}

function validateForm() {
    var form = document.getElementById("contact-form");
    var isValid = true;

    // Name field validation
    var inputGroup = form.querySelectorAll("#namevalue"); 
    inputGroup.forEach(function(input){
        var errorSpan = document.querySelector("#" + input.id + "-error");
        if(input.value.trim() === "") {
            errorSpan.style.display = "block";
            errorSpan.textContent = "Please enter your Name!";
            errorSpan.style.color = "red";
            errorSpan.style.fontSize = "0.7rem"; 
            errorSpan.style.fontFamily = "poppins"; 
            input.classList.add("input-errorbox");

            isValid = false; 
             
        }else {
            errorSpan.style.display = "none";
            input.classList.remove("input-errorbox");
            
        }
    }); 
 
    // Email field validation
    var emailGroup = form.querySelectorAll("#emailvalue");
    emailGroup.forEach(function(input) {
        var errorSpan = document.querySelector("#" + input.id + "-error");
        if(input.value.trim() ==="") {
            errorSpan.style.display = "block";
            errorSpan.textContent = "Enter a valid email address!";
            errorSpan.style.color = "red";
            errorSpan.style.fontFamily = "poppins";
            errorSpan.style.fontSize = "0.7rem";
            input.classList.add("input-errorbox");

            isValid = false;
        }else{
            errorSpan.style.display = "none";
            input.classList.remove("input-error");
        }
        
    }); 

    // Subject field validation
    var subjectGroup = form.querySelectorAll("#subjectvalue");
    subjectGroup.forEach(function(input) {
        var errorSpan = document.querySelector("#" + input.id + "-error");
        if(input.value.trim() ==="") {
            errorSpan.style.display = "block";
            errorSpan.textContent = "This field is required!";
            errorSpan.style.color = "red";
            errorSpan.style.fontFamily = "poppins";
            errorSpan.style.fontSize = "0.7rem";
            input.classList.add("input-errorbox");

            isValid = false;   
        } else {
            errorSpan.style.display = "none";
            input.classList.remove("input-errorbox");
        }
        
    });

    // // message field validation
    var messageText = form.querySelectorAll("#messagevalue")
    messageText.forEach(function(textarea) {
        var errorSpan = document.querySelector("#" + textarea.id + "-error"); 

        if(textarea.value.trim() === "") {
            errorSpan.style.display = "block";
            errorSpan.textContent = "This field can't be empty!";
            errorSpan.style.color = "red";
            errorSpan.style.fontFamily = "poppins";
            errorSpan.style.fontSize = "0.7rem";
            textarea.classList.add("input-errorbox");

            isValid = false;  
        } else {
            errorSpan.style.display = "none";
            textarea.classList.remove("input-errorbox"); 
        }
         
    });

    if (isValid) {
        sendMail();  
    }

}


function resetAction() { 
    document.getElementById("contact-form").reset();
}


document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    validateForm();    
    
});

