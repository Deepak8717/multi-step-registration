const btn = document.getElementsByClassName("btn")[0];
const message = document.getElementsByClassName("message")[0];
btn.addEventListener("click", () => {
  message.classList.toggle("clicked");
});
