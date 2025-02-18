document.addEventListener("DOMContentLoaded", function () {
  console.log("Cyber Security Awareness website loaded!");

  // Form validation for contact page
  const contactForm = document.querySelector("form");
  if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent actual form submission

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();

          if (name === "" || email === "" || message === "") {
              alert("Please fill in all fields before submitting.");
              return;
          }

          if (!validateEmail(email)) {
              alert("Please enter a valid email address.");
              return;
          }

          alert("Thank you for your message! We will get back to you soon.");
          contactForm.reset();
      });
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
