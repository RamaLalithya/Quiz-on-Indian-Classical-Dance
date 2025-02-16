const questions = [
    { 
        question: "Which of the following is NOT a classical dance form of India?", 
        options: ["Bharatanatyam", "Kuchipudi", "Garba", "Kathak"], 
        answer: 2
    },
    { 
        question: "Which state is famous for the classical dance form Kathakali?", 
        options: ["Kerala", "Tamil Nadu", "Odisha", "Karnataka"], 
        answer: 0
    },
    { 
        question: "Which classical dance form originated in Andhra Pradesh?", 
        options: ["Bharatanatyam", "Kuchipudi", "Kathak", "Manipuri"], 
        answer: 1
    },
    { 
        question: "Which classical dance is known for its graceful, circular movements and devotion to Lord Krishna?", 
        options: ["Odissi", "Kathak", "Sattriya", "Mohiniyattam"], 
        answer: 0
    },
    { 
        question: "Which Indian classical dance form primarily focuses on storytelling through expressions (Abhinaya)?", 
        options: ["Kathak", "Bharatanatyam", "Kuchipudi", "Odissi"], 
        answer: 2
    },
    { 
        question: "What is the meaning of the term Mudra in classical dance?", 
        options: ["Facial Expression", "Hand Gesture", "Foot Movement", "Costume Design"], 
        answer: 1
    },
    { 
        question: "Mohiniyattam is traditionally performed by which group?", 
        options: ["Male Dancers", "Female Dancers", "Puppets", "Folk Dancers"], 
        answer: 1
    },
    { 
        question: "Which classical dance form was historically performed in temples as a form of devotion?", 
        options: ["Manipuri", "kathak", "Bharathanatyam", "Kathakali"], 
        answer: 2
    },
    { 
        question: "What is the main theme of most Indian classical dance performances?", 
        options: ["War and battle scenes", "Devotion and mythology", "Political events", "Modern social issues"], 
        answer: 1
    },
    { 
        question: "What is the meaning of Lasya in Indian classical dance?", 
        options: ["Vigorous male dance", "Graceful and feminine movements", " Fast-paced footwork", "Dramatic facial expressions"], 
        answer: 1
    },
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

document.getElementById("start-quiz").addEventListener("click", () => {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = questionData.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");

        // Highlight if previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
        }

        button.onclick = () => {
            selectAnswer(index);
        };
        optionsDiv.appendChild(button);
    });

    document.getElementById("next-question").disabled = userAnswers[currentQuestionIndex] === null;
}

function selectAnswer(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;

    // Highlight selected option
    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach((btn, idx) => {
        btn.classList.toggle("selected", idx === selectedIndex);
    });

    document.getElementById("next-question").disabled = false;
}

document.getElementById("next-question").addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    document.getElementById("score").textContent = `${score}`;
}