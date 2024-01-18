const createLaylout = () => { //ну это бред в JS верстку делать
    let modal = document.createElement('div');
    modal.className = 'modal';
    let modalWrapper = document.createElement('div');
    modalWrapper.className = 'modal__wrapper';
    modal.appendChild(modalWrapper); 
    let modalTop = document.createElement('div');
    modalTop.className = 'modal__top top';
    modalWrapper.appendChild(modalTop);
    let modalTitle = document.createElement('h2');
    modalTitle.className = 'modal__title top__title';
    modalTitle.textContent = 'Результат';
    modalTop.appendChild(modalTitle);
    let modalBtns = document.createElement('div');
    modalBtns.className = 'modal__btns top__btns';
    modalTop.appendChild(modalBtns);
    let foldingBtn = document.createElement('div');
    foldingBtn.className = 'modal__btn modal__folding top__btn top__folding';
    modalBtns.appendChild(foldingBtn);
    let foldingSym = document.createElement('span');
    foldingSym.className = 'modal__sym top__sym';
    foldingSym.textContent = '_';
    foldingBtn.appendChild(foldingSym);
    let unfoldingBtn = document.createElement('div');
    unfoldingBtn.className = 'modal__btn modal__unfolding top__btn top__unfolding';
    modalBtns.appendChild(unfoldingBtn);
    let unfoldingImg = document.createElement('img');
    unfoldingImg.src = './images/unfolding.png';
    unfoldingImg.className = 'modal__btn-img top__btn-img';
    unfoldingBtn.appendChild(unfoldingImg);
    let closeBtn = document.createElement('div');
    closeBtn.className = 'modal__btn modal__close top__btn top__close';
    modalBtns.appendChild(closeBtn);
    let closeImg = document.createElement('img');
    closeImg.src = './images/close.png';
    closeImg.className = 'modal__btn-img top__btn-img';
    closeBtn.appendChild(closeImg);
    

    let modalContent = document.createElement('div');
    modalContent.className = 'modal__content';
    modalWrapper.appendChild(modalContent);
    let contentImg = document.createElement('img');
    contentImg.src = './images/windows-xp.png';
    contentImg.className = 'modal__content-img';
    modalContent.appendChild(contentImg);
    let contentRight = document.createElement('div');
    contentRight.className = 'modal__content-right';
    modalContent.appendChild(contentRight);

    let contentText1 = document.createElement('p');
    contentText1.className = 'modal__content-text1';
    contentText1.textContent = 'Вопрос:';
    contentRight.appendChild(contentText1);

    let contentQuestion = document.createElement('h2');
    contentQuestion.className = 'modal__content-question';
    contentRight.appendChild(contentQuestion);

    let contentText2 = document.createElement('p');
    contentText2.className = 'modal__content-text2';
    contentText2.textContent = 'Ответ:';
    contentRight.appendChild(contentText2);

    let contentAnswer = document.createElement('p');
    contentAnswer.className = 'modal__content-answer';
    contentRight.appendChild(contentAnswer);
    let contentCount = document.createElement('p');
    contentCount.className = 'modal__content-count';
    let textNode = document.createTextNode('Количество попыток: ');
    contentCount.appendChild(textNode);
    let span = document.createElement('span');
    span.className = 'count';
    contentCount.appendChild(span);
    contentRight.appendChild(contentCount);
    let contentResult = document.createElement('p');
    contentResult.className = 'modal__content-result';
    contentResult.textContent = 'Вы проиграли';
    contentRight.appendChild(contentResult);
    let modalFooter = document.createElement('div');
    modalFooter.className = 'modal__footer';
    modalWrapper.appendChild(modalFooter);
    let footerBtn = document.createElement('button');
    footerBtn.className = 'modal__footer-btn';
    footerBtn.textContent = 'Еше раз';
    modalFooter.appendChild(footerBtn);
    document.body.appendChild(modal);
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    let mainElement = document.createElement('main');
    mainElement.className = 'main';
    wrapper.appendChild(mainElement);
    let section = document.createElement('section');
    section.className = 'hangman';
    mainElement.appendChild(section);
    let container = document.createElement('div');
    container.className = 'container';
    section.appendChild(container);
    let hangmanContent = document.createElement('div');
    hangmanContent.className = 'hangman__content';
    container.appendChild(hangmanContent);
    let gallows = document.createElement('div');
    gallows.className = 'hangman__gallows';
    hangmanContent.appendChild(gallows);
    let topElement = document.createElement('div');
    topElement.className = 'gallows__top top';
    gallows.appendChild(topElement);
    let title = document.createElement('h2');
    title.className = 'gallows__title top__title';
    title.textContent = 'Висельница';
    topElement.appendChild(title);
    let btns = document.createElement('div');
    btns.className = 'gallows__btns top__btns';
    topElement.appendChild(btns);
    let folding = document.createElement('div');
    folding.className = 'gallows__btn gallows__folding top__btn top__folding';
    btns.appendChild(folding);
    let sym = document.createElement('span');
    sym.className = 'gallows__sym top__sym';
    sym.textContent = '_';
    folding.appendChild(sym);
    let unfolding = document.createElement('div');
    unfolding.className = 'gallows__btn gallows__unfolding top__btn top__unfolding';
    btns.appendChild(unfolding);
    unfoldingImg = document.createElement('img');
    unfoldingImg.className = 'gallows__btn-img top__btn-img';
    unfoldingImg.src = './images/unfolding.png';
    unfoldingImg.alt = '';
    unfolding.appendChild(unfoldingImg);
    let close = document.createElement('div');
    close.className = 'gallows__btn gallows__close top__btn top__close';
    btns.appendChild(close);
    closeImg = document.createElement('img');
    closeImg.className = 'gallows__btn-img top__btn-img';
    closeImg.src = './images/close.png';
    closeImg.alt = '';
    close.appendChild(closeImg);
    let images = document.createElement('div');
    images.className = 'gallows__images';
    gallows.appendChild(images);
    let imgNames = ['gallows', 'head', 'body', 'r-hand', 'l-hand', 'r-leg', 'l-leg'];
    imgNames.forEach(name => {
        let img = document.createElement('img');
        img.src = `./images/${name}.png`;
        img.alt = '';
        img.className = name === 'gallows' ? 'gallow__img' : `gallow__img-parts ${name}`;
        images.appendChild(img);
    });
    let hangmanRight = document.createElement('div');
    hangmanRight.className = 'hangman__right';
    let hangmanQuestions = document.createElement('div');
    hangmanQuestions.className = 'hangman__questions';
    hangmanRight.appendChild(hangmanQuestions);
    let questionsTop = document.createElement('div');
    questionsTop.className = 'questions__top top';
    hangmanQuestions.appendChild(questionsTop);
    let questionsTitle = document.createElement('h2');
    questionsTitle.className = 'questions__title top__title';
    questionsTitle.textContent = 'Вопрос';
    questionsTop.appendChild(questionsTitle);
    let questionsBtns = document.createElement('div');
    questionsBtns.className = 'questions__btns top__btns';
    questionsTop.appendChild(questionsBtns);
    folding = document.createElement('div');
    folding.className = 'questions__btn questions__folding top__btn top__folding';
    questionsBtns.appendChild(folding);
    sym = document.createElement('span');
    sym.className = 'questions__sym top__sym';
    sym.textContent = '_';
    folding.appendChild(sym);
    unfolding = document.createElement('div');
    unfolding.className = 'questions__btn questions__unfolding top__btn top__unfolding';
    questionsBtns.appendChild(unfolding);
    unfoldingImg = document.createElement('img');
    unfoldingImg.className = 'questions__btn-img top__btn-img';
    unfoldingImg.src = './images/unfolding.png';
    unfoldingImg.alt = '';
    unfolding.appendChild(unfoldingImg);
    close = document.createElement('div');
    close.className = 'questions__btn questions__close top__btn top__close';
    questionsBtns.appendChild(close);
    closeImg = document.createElement('img');
    closeImg.className = 'questions__btn-img top__btn-img';
    closeImg.src = './images/close.png';
    closeImg.alt = '';
    close.appendChild(closeImg);
    let questionsContent = document.createElement('div');
    questionsContent.className = 'questions__content';
    hangmanQuestions.appendChild(questionsContent);
    let contentTitle = document.createElement('h2');
    contentTitle.className = 'questions__content-title';
    contentTitle.textContent = 'Вопрос';
    questionsContent.appendChild(contentTitle);
    let questionsAnswer = document.createElement('div');
    questionsAnswer.className = 'questions__answer';
    hangmanQuestions.appendChild(questionsAnswer);
    let letters = ['_', '_', '_', '_', '_'];
    letters.forEach(letter => {
        let character = document.createElement('div');
        character.className = 'questions_character';
        questionsAnswer.appendChild(character);
        let letterSpan = document.createElement('span');
        letterSpan.className = 'questions__letter';
        letterSpan.textContent = letter;
        character.appendChild(letterSpan);
    });
    let questionsAttempt = document.createElement('div');
    questionsAttempt.className = 'questions__attempt';
    hangmanQuestions.appendChild(questionsAttempt);
    let attemptText = document.createElement('p');
    attemptText.className = 'attempt__text';
    attemptText.textContent = 'Количество попыток: ';
    questionsAttempt.appendChild(attemptText);
    let attempt = document.createElement('span');
    attempt.className = 'attempt';
    attempt.textContent = '0 / 6';
    attemptText.appendChild(attempt);
    let hangmanKeyboard = document.createElement('div');
    hangmanKeyboard.className = 'hangman__keyboard';
    let keyboardTop = document.createElement('div');
    keyboardTop.className = 'keyboard__top top';
    hangmanKeyboard.appendChild(keyboardTop);
    let keyboardTitle = document.createElement('h2');
    keyboardTitle.className = 'keyboard__title top__title';
    keyboardTitle.textContent = 'Экранная клавиатура';
    keyboardTop.appendChild(keyboardTitle);
    let keyboardBtns = document.createElement('div');
    keyboardBtns.className = 'keyboard__btns top__btns';
    keyboardTop.appendChild(keyboardBtns);
    folding = document.createElement('div');
    folding.className = 'keyboard__btn keyboard__folding top__btn top__folding';
    keyboardBtns.appendChild(folding);
    sym = document.createElement('span');
    sym.className = 'keyboard__sym top__sym';
    sym.textContent = '_';
    folding.appendChild(sym);
    unfolding = document.createElement('div');
    unfolding.className = 'keyboard__btn keyboard__unfolding top__btn top__unfolding';
    keyboardBtns.appendChild(unfolding);
    unfoldingImg = document.createElement('img');
    unfoldingImg.className = 'keyboard__btn-img top__btn-img';
    unfoldingImg.src = './images/unfolding.png';
    unfoldingImg.alt = '';
    unfolding.appendChild(unfoldingImg);
    close = document.createElement('div');
    close.className = 'keyboard__btn keyboard__close top__btn top__close';
    keyboardBtns.appendChild(close);
    closeImg = document.createElement('img');
    closeImg.className = 'keyboard__btn-img top__btn-img';
    closeImg.src = './images/close.png';
    closeImg.alt = '';
    close.appendChild(closeImg);
    let keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard__keys';
    hangmanKeyboard.appendChild(keyboardKeys);
    let keysRows = [
        ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
        ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
        ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю']
    ];
    keysRows.forEach(row => {
        let keysInner = document.createElement('div');
        keysInner.className = 'keys__inner';
        keyboardKeys.appendChild(keysInner);
        row.forEach(key => {
            let keyboardKey = document.createElement('div');
            keyboardKey.className = 'keyboard__key';
            keyboardKey.textContent = key;
            keysInner.appendChild(keyboardKey);
        });
    });
    hangmanRight.appendChild(hangmanKeyboard);
    hangmanContent.appendChild(hangmanRight);
    let footer = document.createElement('footer');
    let footerContent = document.createElement('div');
    let footerPanel = document.createElement('div');
    let footerStart = document.createElement('div');
    let footerStartImg = document.createElement('img');
    let footerStartText = document.createElement('p');
    let divA = document.createElement('div');
    let footerClock = document.createElement('div');
    let footerClockTime = document.createElement('p');
    footer.className = 'footer';
    footerContent.className = 'footer__content';
    footerPanel.className = 'footer__panel';
    footerStart.className = 'footer__start';
    footerStartImg.className = 'footer__start-img';
    footerStartText.className = 'footer__start-text';
    divA.className = 'a';
    footerClock.className = 'footer__clock';
    footerClockTime.className = 'footer__clock-time';
    footerStartImg.src = './images/xp.png';
    footerStartImg.alt = '';
    footerStartText.textContent = 'пуск';
    footerClockTime.textContent = '09:05';
    footerStart.appendChild(footerStartImg);
    footerStart.appendChild(footerStartText);
    footerPanel.appendChild(footerStart);
    footerPanel.appendChild(divA);
    footerContent.appendChild(footerPanel);
    footerContent.appendChild(footerClock);
    footerClock.appendChild(footerClockTime);
    footer.appendChild(footerContent);
    wrapper.appendChild(footer);
    document.body.appendChild(wrapper);
} //можно вместо пыток давать делать верстку в JS, преступник больше никогда не встанет на кривую дорожку


export default createLaylout;