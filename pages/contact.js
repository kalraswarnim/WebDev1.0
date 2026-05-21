const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const button = document.querySelector(".contact-submit");

  button.textContent = "Inquiry Sent";

  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Send Inquiry";
    button.disabled = false;
    form.reset();
  }, 2500);
});