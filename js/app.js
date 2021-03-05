//?variables
const sendBTN = document.querySelector("#sendBtn "),
    email = document.querySelector("#email"),
    subject = document.querySelector("#subject"),
    message = document.querySelector("#message"),
    form = document.querySelector("#email-form"),
    resetBTN = document.querySelector("#resetBtn");
//? eventListener
// app initialization
document.addEventListener("DOMContentLoaded", appInit);
// validation fields
email.addEventListener("blur", validatedField);
subject.addEventListener("blur", validatedField);
message.addEventListener("blur", validatedField);
//reset btn
resetBTN.addEventListener("click", reset);
//submit form and show git
form.addEventListener("submit", submitForm);
//?function

// app init function
function appInit(e) {
    // disabled send button on loaded
    sendBTN.disabled = true;
}
//sending email and submit the email
function submitForm(e) {
    e.preventDefault();
    // show the spinner
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "block";
    
    // make second gif
    const sendEmailGif = document.createElement("img");
    sendEmailGif.src = "img/mail.gif";
    sendEmailGif.style.display = "block";

    // show the email send image
    setTimeout(function () {
      //hide first spinner
      spinner.style.display = "none";
      //append image to the html
      const loaders = document.querySelector("#loaders");
      loaders.appendChild(sendEmailGif);

      setTimeout(() => {
        reset();
        sendEmailGif.remove();
      }, 4000);
    }, 3000);
}
//validation field of from
function validatedField(e) {
    validateLength(this);
    const error = document.querySelectorAll(".error");
    if (email.value !== "" && subject.value !== "" && message.value !== "") {
        sendBTN.disabled = false;
    }
}
// validate field
function validateLength(field) {
    let fieldColor;
    if (field.value.length > 0 && field.type !== "email") {
        fieldColor = "green";
        field.classList.remove("error");
    } else if (field.type == "email" && email.value.includes("@")) {
        //validate email field contains "@"
        fieldColor = "green";
    } else {
        sendBTN.disabled = true;
        fieldColor = "red";
        field.classList.add("error");
    }
    field.style.borderBottomColor = fieldColor;
}
function reset() {
    form.reset();
}
