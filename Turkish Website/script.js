const questions = [
    { question: "What should you do when entering a Turkish home?", options: ["Take off your shoes", "Hug the host", "Shake hands"], answer: "Take off your shoes" },
    { question: "Who should start eating first at a Turkish meal?", options: ["Youngest person", "The guest", "Eldest person"], answer: "Eldest person" },
    { question: "What is the polite way to refuse more food?", options: ["Say 'no' loudly", "Politely decline", "Push the plate away"], answer: "Politely decline" },
    { question: "What is a common beverage served after meals?", options: ["Coffee", "Tea", "Milk"], answer: "Tea" },
    { question: "How do you show appreciation to the cook?", options: ["Clap hands", "Say 'Ellerinize sağlık'", "Shake hands"], answer: "Say 'Ellerinize sağlık'" },
    { question: "What should you do if someone offers to pay?", options: ["Let them pay", "Argue politely", "Refuse firmly"], answer: "Argue politely" },
    { question: "How should you toast with raki?", options: ["Look away", "Make eye contact", "Raise glass above head"], answer: "Make eye contact" },
    { question: "Is it rude to eat before the host?", options: ["Yes", "No"], answer: "Yes" },
    { question: "What should you do when offered tea?", options: ["Accept politely", "Say no", "Ignore"], answer: "Accept politely" },
    { question: "Which hand gesture is polite when eating?", options: ["Thumbs up", "Holding hand over heart", "Nodding"], answer: "Nodding" },
    { question: "Is it polite to refuse food immediately?", options: ["Yes", "No"], answer: "No" },
    { question: "What should you say after a good meal?", options: ["Thank you", "Ellerinize sağlık", "Nothing"], answer: "Ellerinize sağlık" },
    { question: "Who usually pays at a restaurant?", options: ["Split bill", "One person insists", "Waiter decides"], answer: "One person insists" },
    { question: "What should you do with your utensils after eating?", options: ["Leave them crossed", "Place them parallel on the plate", "Drop them"], answer: "Place them parallel on the plate" },
    { question: "What should you avoid doing at the table?", options: ["Talking", "Blowing nose", "Drinking water"], answer: "Blowing nose" }
];

const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, index) => {
    let questionHTML = `<div class="question">${index + 1}. ${q.question}</div>`;
    q.options.forEach(option => {
        questionHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
    });
    quizContainer.innerHTML += questionHTML;
});

function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) score++;
    });
    
    document.getElementById("result").innerHTML = `Your Score: ${score}/15`;
    
    // Show return button after submitting
    document.getElementById("return").style.display = "block";
}
