// Flashcard data with multiple options
const flashcards = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Rome", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2"
    }
  ];
  
  let currentCardIndex = 0;
  let score = 0;
  
  // Elements
  const questionElement = document.querySelector('.question p');
  const optionsElement = document.querySelector('.options');
  const scoreElement = document.getElementById('score');
  
  // Display the current flashcard
  function displayCard() {
    const currentCard = flashcards[currentCardIndex];
    questionElement.textContent = currentCard.question;
  
    // Clear previous options
    optionsElement.innerHTML = "";
  
    // Display options
    currentCard.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  // Check if the selected answer is correct
  function checkAnswer(selectedOption) {
    const currentCard = flashcards[currentCardIndex];
    if (selectedOption === currentCard.correctAnswer) {
      score++;
      scoreElement.textContent = score;
    }
  
    // Disable all buttons after an answer is selected
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => {
      button.disabled = true;
      if (button.textContent === currentCard.correctAnswer) {
        button.style.backgroundColor = "#4CAF50"; // Correct answer
      } else {
        button.style.backgroundColor = "#f44336"; // Incorrect answer
      }
    });
  }
  
  // Show the next card
  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    displayCard();
  }
  
  // Initialize the app by displaying the first flashcard
  displayCard();
  