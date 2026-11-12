var typed= new Typed(".text", {strings:["REPEATING THE SAME TRAINING" , "LETTING KNOWLEDGE LIVE IN PEOPLE'S HEADS" , "MAKING CUSTOMERS FIGURE IT OUT THEMSELVES"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const contactForm = document.querySelector(
  'form.contact-form:not(#campaign-intake-form)'
);

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.currentTarget;
    const successMessage =
      document.getElementById("form-success");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      if (successMessage) {
        successMessage.style.display = "block";
        successMessage.textContent =
          "Thank you! Your message has been sent successfully.";
      }

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      if (successMessage) {
        successMessage.style.display = "block";
        successMessage.textContent =
          "There was a problem sending your message. Please try again.";
      }
    }
  });
}


const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarLinks = document.querySelector('.navbar');

hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});