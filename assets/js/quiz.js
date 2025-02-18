document.addEventListener("DOMContentLoaded", function() {
  const questions = [
      {
          question: "What is the safest way to create a strong password?",
          options: [
              "Use your name and birthdate",
              "Use a mix of letters, numbers & symbols",
              "Use 'password123'",
              "Use the same password for all sites"
          ],
          correct: 1
      },
      {
          question: "What should you do if you receive a suspicious email asking for personal details?",
          options: [
              "Click on the link to check",
              "Ignore it",
              "Report it to CERT-In",
              "Reply with your bank details"
          ],
          correct: 2
      },
      {
          question: "Which of these is an official Indian cybercrime portal?",
          options: [
              "www.cybercrime.gov.in",
              "www.hackernews.com",
              "www.fakealerts.com",
              "www.scamwatch.com"
          ],
          correct: 0
      },
      {
          question: "What is the best way to protect your device from malware?",
          options: [
              "Click on random pop-up ads",
              "Install antivirus software and update it regularly",
              "Download software from unknown websites",
              "Ignore security updates"
          ],
          correct: 1
      },
      {
          question: "Which of these is an example of phishing?",
          options: [
              "A bank sending an OTP to confirm a transaction",
              "An unknown email claiming you won a lottery and asking for personal details",
              "A government website asking for Aadhaar verification securely",
              "A software update notification from a trusted app"
          ],
          correct: 1
      }
  ];

  let currentQuestionIndex = 0;
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const resultElement = document.getElementById("result");

  function loadQuestion() {
      let q = questions[currentQuestionIndex];
      questionElement.textContent = q.question;
      optionsElement.innerHTML = "";
      q.options.forEach((option, index) => {
          let li = document.createElement("li");
          li.textContent = option;
          li.addEventListener("click", () => checkAnswer(index));
          optionsElement.appendChild(li);
      });
      resultElement.textContent = "";
      nextButton.style.display = "none";
  }

  function checkAnswer(selectedIndex) {
      let correctIndex = questions[currentQuestionIndex].correct;
      if (selectedIndex === correctIndex) {
          resultElement.textContent = "Correct! ✅";
      } else {
          resultElement.textContent = "Wrong! ❌ The correct answer is: " + questions[currentQuestionIndex].options[correctIndex];
      }
      nextButton.style.display = "block";
  }

  nextButton.addEventListener("click", function() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          loadQuestion();
      } else {
          questionElement.textContent = "Quiz Completed! 🎉";
          optionsElement.innerHTML = "";
          nextButton.style.display = "none";
      }
  });

  loadQuestion();
});
