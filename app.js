//using selectors inside the element
// traversing the dom




// this is traversing the dom option
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    var parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle('show-text')
  });
});
