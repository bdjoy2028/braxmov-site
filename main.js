var typed= new Typed(".text", {strings:["Digital Content Consultant" , "Digital Media Advisor" , "Strategic Content Consultant"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    const successMessage = document.getElementById("form-success");

    fetch(FormData.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            successMessage.style.display = "block";
            form.reset();
        } else {
            successMessage.style.display = "#e8e6e1";
            successMessage.innerText = "There was a problem with your submission. Please try again.";
            successMessage.style.display = "block";
        }
    });
});

const hamburgerbtn = document.getElementById('hamburger-btn');
const navbarlinks = document.querySelector('.navbar');

hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});