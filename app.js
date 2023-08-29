//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  // console.log(question);'
  btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", (e) => {
    questions.forEach(function (item) {
      if (item != question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// this is traversing the dom option
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     var parent = e.currentTarget.parentElement.parentElement;
//     parent.classList.toggle('show-text')
//   });
// });
