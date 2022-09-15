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
