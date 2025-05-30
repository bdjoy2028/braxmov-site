var typed= new Typed(".text", {strings:["Brand Storyteller" , "Content Creator" , "Video Editor"],
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