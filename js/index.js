// Toggle Funktion Bookmark & Answer

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

console.log(bookmarkButton);

bookmarkButton.addEventListener('click', event => {
    bookmarkButton.classList.toggle('marked')
})

answerButton.addEventListener('click', event => {

    answer.classList.toggle('hidden');

    console.log(answerButton.textContent);
    if (answerButton.textContent.trim() === "Show answer") {
        console.log("ausgeführt")
        answerButton.textContent = "Hide answer";
    }
    else {
          answerButton.textContent = "Show answer";
    }
})

// Add Funktion Form

const form = document.querySelector('[data-js="form"]');
const formQuestion = document.querySelector('[data-js="form-question"]');
const formAnswer = document.querySelector('[data-js="form-answer"]');
const formTag = document.querySelector('[data-js="form-tag"]');
const formSubmit = document.querySelector('[data-js="form-submit"]')

formSubmit.addEventListener('submit', event => {
    console.log("funktioniert");

})