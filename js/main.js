'use strict';

var gCurrQuestIdx = 0;
var gCurrQuestTimeStart = Date.now();

var gQuests = [
    {
        txt: 'אאא',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'בבב',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'גגג',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'דדד',
        answer: null,
        duration: null,
        confidence: null
    },
];

function init() {
    renderQuestion(gQuests[gCurrQuestIdx]);
}

function updateAnswer(elInput) {
    const elAnswer = document.querySelector('.answer');
    elAnswer.innerText = elInput.value + '%';
}

function saveAnswer() {
    var currQuest = gQuests[gCurrQuestIdx];
    var duration = Date.now() - gCurrQuestTimeStart;
    currQuest.duration = duration;
    const elAnswerInput = document.querySelector('.answer-input');
    currQuest.answer = elAnswerInput.value;
}

function nextQuest() {
    var currQuest = gQuests[gCurrQuestIdx];
    if (!currQuest.answer) {
        showErrorMsg();
        return;
    }
    if (gCurrQuestIdx === gQuests.length - 1) {
        showNextPage();
        return;
    }
    var elSelectedConfidence = document.querySelector('[name="answer"]:checked');
    currQuest.confidence = elSelectedConfidence.value;
    gCurrQuestIdx++;
    renderQuestion(gQuests[gCurrQuestIdx]);
    gCurrQuestTimeStart = Date.now();
}

function renderQuestion(quest) {
    var elScenario = document.querySelector('.scenario');
    elScenario.innerText = quest.txt;
    var elAnswer = document.querySelector('.answer');
    elAnswer.innerText = '50%';
    var elAnswerInput = document.querySelector('.answer-input');
    elAnswerInput.value = 50;
    var elSelectedConfidence = document.querySelector('[name="answer"]:checked');
    if (elSelectedConfidence) elSelectedConfidence.checked = false;

    // check if error msg is shown, if it is - hide it!
    var elError = document.querySelector('.error-msg');
    if (!elError.classList.contains('hide')) elError.classList.add('hide');

}

function showErrorMsg() {
    var elError = document.querySelector('.error-msg');
    elError.classList.remove('hide');
}

function showNextPage() {
    console.log('DONE');
}