// массив с вопросами, вариантами ответов и праильными ответами
let questions = [
    {
        question: "Какой язык програмирования вы изучаете?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Какой язык програмирования был придуман первым?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "Java"
    },
    {
        question: "Какой язык програмирования изучают в школе?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "Python"

    }, {
        question: "Какой язык програмирования самый сложный?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "С++"
    }
];
let currentQuestion = 0; // текущий вопрос 
let correctAnswers = 0; // колл правильных ответов 
let questionElement = document.getElementById("question"); // получаем блок для размещения вопроса 
let optionsElement = document.getElementById("options"); // получаем блок кнопок 

// функция для отабражения текущего вопроса и вариантов ответов 
function dispayQuestion() {
    // Размещяем на странице текущий вопрос 
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // очистить блок кнопок
    optionsElement.innerHTML = "";
    // получим массив ответов
    let optionsArray = questions[currentQuestion].options;
    // создать кнопки с вариантами ответов и приваезать к им функцию nextQuestion  
    optionsArray.forEach((option) => {
        // создать элемент (кнопку) и записать её переменную 
        let button = document.createElement('button');
        // добавить кнопку на страницу 
        optionsElement.append(button);
        // доюавить на кнопку текст из массива
        button.textContent = option;
    });
    optionsElement.addEventListener('click', (event) => {
        let currentAnswer = event.target.textContent;
        console.log(currentAnswer); 
        nextQuestion(currentAnswer)
    }, {once:true})
}
// функйия перехода к следущему вопросу 
function nextQuestion(answer) {
    if(answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++; // увеличим счётчик правильных ответов 
    } 
   currentQuestion++;// перейти к след вопросу 
   if(currentQuestion < questions.length) {
    dispayQuestion(); // отображаем след вопрос 
   } else{
    console.log()
   }
}

function dispayResult() {
    questionElement.style.display = "none";
    optionsElementElement.style.display = "none";
    resultElement.textContent = `Правильных ответов ${currentAnswers} из ${questions.length}`
}


dispayQuestion();
