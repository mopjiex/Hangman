import questions from './questions.js';
import createLaylout  from './creationLayout.js';
createLaylout();

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
let randIdx = random(0, questions.length - 1);
let currentIdx = randIdx;

const generatingQuestion = () => {
    const questionsTitle = document.querySelector('.questions__content-title');
    const questionsAnswer = document.querySelector('.questions__answer');
    const {question, answer} = questions[randIdx];
    questionsTitle.textContent = question;
    questionsAnswer.innerHTML = '';

    for(let i = 0; i < answer.length; i++) {
        let character = document.createElement('div');
        character.className = 'questions_character';
        questionsAnswer.appendChild(character);
    
        let letterSpan = document.createElement('span');
        letterSpan.className = 'questions__letter';
        letterSpan.textContent = '_';
        character.appendChild(letterSpan);
    }       
}

generatingQuestion();

const keyboardKey = document.querySelectorAll('.keyboard__key');
let questionsLetter = document.querySelectorAll('.questions__letter');
const attempt = document.querySelector('.attempt');
const modal = document.querySelector('.modal');
const gallowImgParts = document.querySelectorAll('.gallow__img-parts');
const modalFooterBtn = document.querySelector('.modal__footer-btn');
const wrapper = document.querySelector('.wrapper');
const attemptCount = document.querySelector('.count');
let count = 0;

const modalWindow = (textWin) => {
    const modalContentQuestion = document.querySelector('.modal__content-question');
    const modalContentAnswer = document.querySelector('.modal__content-answer');
    const modalContentResult = document.querySelector('.modal__content-result');
    const {question, answer} = questions[randIdx];
    modalContentQuestion.textContent = question;
    modalContentAnswer.textContent = answer;
    attemptCount.textContent = count;
    modalContentResult.style.color = textWin  === 'Проиграл' ? 'red' : 'green';
    modalContentResult.textContent = textWin;
}

const keyClick = (e) => {
    const item = e.target;
    const answer = (questions[randIdx].answer).toUpperCase();
    let isletterFound = checkLetterFound(item, answer);
    let isLetterMissing = checkLetterMissing();
    item.classList.add('disabled');
    if(!isletterFound) count+=1;
    checkGameStatus(isLetterMissing);
    attempt.textContent = `${count} / 6`;
    displayGallowImage();
}

const checkLetterFound = (item, answer) => {
    let isletterFound = false;
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === item.textContent) {
            questionsLetter[i].textContent = item.textContent; 
            isletterFound = true;
        } 
    }
    return isletterFound;
}

const checkLetterMissing = () => {
    let isLetterMissing = false;
    questionsLetter.forEach(item => {
        if(item.textContent === '_') isLetterMissing = true;
    })
    return isLetterMissing;
}


const checkGameStatus = (isLetterMissing) => {
    if(count <= 5) {
        if(!isLetterMissing) {
            displayModalWindow('Выиграл');
        }
    } else {
        displayModalWindow('Проиграл');
    }
}

const displayModalWindow = (message) => {
    modalWindow(message);
    modal.style.display = 'block';
    wrapper.classList.add('disabled');
} 

const displayGallowImage = () => {
    try {
        gallowImgParts[count - 1].style.display = 'block';
    } catch(error) {}      
}

const letterDisplay = () => {
    keyboardKey.forEach(item => {
        item.removeEventListener('click', keyClick);
        item.addEventListener('click', keyClick);
    })
}

letterDisplay();

const reload = () => {
    modal.style.display = 'none';
    wrapper.classList.remove('disabled');
    count = 0;
        while(true) {
            randIdx = random(0, questions.length - 1);
            if(currentIdx !== randIdx) {
                currentIdx = randIdx;
                break;
            }
        }
    generatingQuestion();
    attempt.textContent = '0 / 6';
    letterDisplay();
    questionsLetter = document.querySelectorAll('.questions__letter');
    for(let item of gallowImgParts) {
        item.style.display = 'none';
    }
    for(let item of keyboardKey) {
        item.classList.remove('disabled');
    }

}

modalFooterBtn.addEventListener('click', reload);

const keyPress = (e) => {
    e.preventDefault();
    const ruKey = {
        'q' : 'й',
        'w' : 'ц',
        'e' : 'у',
        'r' : 'к',
        't' : 'е',
        'y' : 'н',
        'u' : 'г',
        'i' : 'ш',
        'o' : 'щ',
        'p' : 'з',
        '[' : 'х',
        ']' : 'ъ',

        'a' : 'ф',
        's' : 'ы',
        'd' : 'в',
        'f' : 'а',
        'g' : 'п',
        'h' : 'р',
        'j' : 'о',
        'k' : 'л',
        'l' : 'д',
        ';' : 'ж',
        "'": 'э',
        
        'z' : 'я',
        'x' : 'ч',
        'c' : 'с',
        'v' : 'м',
        'b' : 'и',
        'n' : 'т',
        'm' : 'ь',
        ',' : 'б',
        '.' : 'ю',  
    }

    let key = e.key.toUpperCase();

    for(let k in ruKey) {
        if(key === k.toUpperCase()) key = (ruKey[k]).toUpperCase();  
    }

    if(key) {
        keyboardKey.forEach(item => {
            if(key === item.textContent && !item.classList.contains('disabled')) {
                item.click();
            }
        })
    }
}


document.addEventListener('keydown', keyPress);


//отсебятина, время на нижней панели
const clock = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, 0);
    const minite = String(date.getMinutes()).padStart(2, 0);
    const footerTime = document.querySelector('.footer__clock-time');
    footerTime.innerHTML = `${hour}:${minite}`;
}

setInterval(clock, 1000);
