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








