const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(x) {
    questionElement.innerText = x.question;
    x.answers.forEach(y => {
        const button = document.createElement('button');
        button.innerText = y.text
        button.classList.add('btn')
        if (y.correct) {
            button.dataset.correct = y.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(z => {
        setStatusClass(z, z.dataset.correct)
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: '¿Cuál es el río más largo del planeta?',
        answers: [
            {text: 'Nilo', correct: false},
            {text: 'Amazonas', correct: true},
            {text: 'Misisipi', correct: false},
            {text: 'Yangtsé', correct: false}
        ]
    },

    {
        question: '¿Entre qué siglos se desarrolló la Edad Media en Europa?',
        answers: [
            {text: 'V-XI', correct: false},
            {text: 'VI-XII', correct: false},
            {text: 'IV-XII', correct: false},
            {text: 'V-XV', correct: true}
        ]
    },

    {
        question: '¿Quién es el autor de la novela `La regenta`?',
        answers: [
            {text: 'Azorín', correct: false},
            {text: 'Clarín', correct: true},
            {text: 'Galdós', correct: false},
            {text: 'Blasco-Ibáñez', correct: false}
        ]
    },

    {
        question: '¿Cómo se llama la plaza principal de la ciudad de Praga?',
        answers: [
            {text: 'Plaza de la Ciudad Vieja', correct: true},
            {text: 'Plaza de la República', correct: false},
            {text: 'Plaza de Nuestra Señora', correct: false},
            {text: 'Plaza del Reloj', correct: false}
        ]
    },

    {
        question: '¿Por cuántas islas (principales y pequeñas) está formado Japón?',
        answers: [
            {text: '2088', correct: false},
            {text: '4308', correct: false},
            {text: '6857', correct: true},
            {text: '5760', correct: false}
        ]
    },
]