// Toggle Funktion Bookmark & Answer


const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener('click', event => {
    bookmarkButton.classList.toggle('marked')
})

answerButton.addEventListener('click', event => {

    answer.classList.toggle('hidden');

    if (answerButton.textContent.trim() === "Show answer") {
        answerButton.textContent = "Hide answer";
    }
    else {
          answerButton.textContent = "Show answer";
    }
})

console.log("Test");



// Add Funktion Form


const form = document.querySelector('[data-js="form"]');
const formQuestion = document.querySelector('[data-js="form-question"]');
const formAnswer = document.querySelector('[data-js="form-answer"]');
const formTag = document.querySelector('[data-js="form-tag"]');
const formSubmit = document.querySelector('[data-js="form-submit"]');


form.addEventListener('submit', event => {
    event.preventDefault(); 
    console.log("Submit Eventlistener funktioniert");

})

console.log("Läuft bis zum Ende");








