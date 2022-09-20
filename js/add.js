// Add Funktion Form

const main = document.querySelector('main')
const form = document.querySelector('[data-js="form"]');
const formQuestion = document.querySelector('[data-js="form-question"]');
const formAnswer = document.querySelector('[data-js="form-answer"]');
const formTag = document.querySelector('[data-js="form-tag"]');
const formSubmit = document.querySelector('[data-js="form-submit"]');


form.addEventListener('submit', event => {
    event.preventDefault(); 
    const card=document.createElement("div");
    const bookmarkButton=document.createElement("button");
    const bookmarkIcon=document.createElement("span");
    const question=document.createElement("div");
    const showQuestion=document.createElement("button");
    const answer=document.createElement("div");
    const tagContainer = document.createElement("div");
    const tag = document.createElement("div");


    main.append(card);
    card.append(bookmarkButton);
    bookmarkButton.append(bookmarkIcon);
    card.append(question);
    card.append(showQuestion);
    card.append(answer);
    card.append(tagContainer);
    tagContainer.append(tag);  

    bookmarkIcon.innerText = "bookmark";
    showQuestion.innerText = "Show answer";
    question.innerText = `${formQuestion.value}`;
    answer.innerText = `${formAnswer.value}`;
    tag.innerText = `${formTag.value}`;

    card.classList.add("card");
    bookmarkButton.classList.add("card__bookmark-button");
    bookmarkButton.setAttribute("data-js","bookmark");
    bookmarkIcon.classList.add("material-symbols-outlined");
    question.classList.add("card__question");
    showQuestion.classList.add("card__answer-button");
    showQuestion.setAttribute("data-js","answer-button");
    answer.classList.add("card__answer", "hidden");
    answer.setAttribute("data-js","answer");
    tagContainer.classList.add("tag-container");
    tag.classList.add("tag-container__tag");


    bookmarkButton.addEventListener('click', event => {
    bookmarkButton.classList.toggle('marked')
})

const answerButton = document.querySelector('[data-js="answer-button"]');
    
answerButton.addEventListener('click', event => {

    answer.classList.toggle('hidden');

    if (answerButton.textContent.trim() === "Show answer") {
        answerButton.textContent = "Hide answer";
    }
    else {
          answerButton.textContent = "Show answer";
    }
})

})


// Counter

const textLengthQuestion = document.querySelector('[data-js="textlength-question"]');
const textLengthAnswer = document.querySelector('[data-js="textlength-answer"]');


textLengthQuestion.innerText = "0/150"

formQuestion.addEventListener('input', event => {
   textLengthQuestion.innerText=`${formQuestion.value.length}/150`;  
})

textLengthAnswer.innerText = "0/150"

formAnswer.addEventListener('input', event => {
   textLengthAnswer.innerText=`${formAnswer.value.length}/150`;  
})