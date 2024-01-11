const accordion = document.querySelectorAll('.js-question');

accordion.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("acc-active");

    const collapsible = element.nextElementSibling;
    if (element.classList.contains("acc-active")) {
      collapsible.style.maxHeight = collapsible.scrollHeight + "px";
    } else {
      collapsible.style.maxHeight = 0
    }
  })
})