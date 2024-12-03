// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
	var x = document.getElementById("list-switch");
	if(i%2 == 0) {
		document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
		document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
	}else {
		document.getElementById("list-switch").style= "display: none;";
		document.getElementById("search-switch").style= "display: none;";
	}
	i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

// QUIZ Page
function quizt(frame) {
  document.getElementById('f1').style='display: none;';
  document.getElementById('f2').style='display: none;';
  document.getElementById('f3').style='display: none;';
  document.getElementById('f4').style='display: none;';
  document.getElementById('f5').style='display: none;';
  document.getElementById('f6').style='display: none;';
  document.getElementById('f7').style='display: none;';
  document.getElementById('f8').style='display: none;';
  document.getElementById('f9').style='display: none;';
  document.getElementById('f10').style='display: none;';
  document.getElementById('f11').style='display: none;';
  if(frame == 1) document.getElementById('f1').style = 'display: block';
  else if(frame == 2) document.getElementById('f2').style = 'display: block';
  else if(frame == 3) document.getElementById('f3').style = 'display: block';
  else if(frame == 4) document.getElementById('f4').style = 'display: block';
  else if(frame == 5) document.getElementById('f5').style = 'display: block';
  else if(frame == 6) document.getElementById('f6').style = 'display: block';
  else if(frame == 7) document.getElementById('f7').style = 'display: block';
  else if(frame == 8) document.getElementById('f8').style = 'display: block';
  else if(frame == 9) document.getElementById('f9').style = 'display: block';
  else if(frame == 10) document.getElementById('f10').style = 'display: block';
  else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
  else alert('error');
}

function startquiz() {
  document.getElementById('title').style = 'display: none;'; 

  document.getElementById('panel').style = 'display: inline-flex;'; 
  document.getElementById('left').style = 'display: block;'; 
  document.getElementById('right').style = 'display: block;'; 
}
function searchdisplay() {
  document.getElementById('searchpanel').style.display="block";
}

function display(n) {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');
  var s3 = document.getElementById('s3');
  var s4 = document.getElementById('s4');

  img1.style = 'display: none;';
  img2.style = 'display: none;';
  img3.style = 'display: none;';
  img4.style = 'display: none;';
  s1.style = 'background: #DF2771; color: #FFF;';
  s2.style = 'background: #DF2771; color: #FFF;';
  s3.style = 'background: #DF2771; color: #FFF;';
  s4.style = 'background: #DF2771; color: #FFF;';

  if(n==1) {
    img1.style = 'display: block;';
    s1.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==2) {
    img2.style = 'display: block;';
    s2.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==3) {
    img3.style = 'display: block;';
    s3.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==4) {
    img4.style = 'display: block;';
    s4.style = 'background: #E5E8EF; color: #DF2771;';
  } 
}


function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if(side==0) {
    menu.style = 'transform: translateX(0vh); position:fixed;';
  }
  else {
    menu.style = 'transform: translateX(-100%);';
  }
  side++;
}

// Function to toggle the chatbot window
function toggleChat() {
    const chatbotWindow = document.getElementById('chatbot-window');
    if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
        chatbotWindow.style.display = 'block';
    } else {
        chatbotWindow.style.display = 'none';
    }
}

// Function to handle user input in the chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    const chatbotMessages = document.getElementById('chatbot-messages');

    if (userMessage === '') return;

    // Display user message
    chatbotMessages.innerHTML += `<div class="user-message"><strong>You:</strong> ${userMessage}</div>`;

    // Clear input field
    userInput.value = '';

    // Simulate a response for now (this should be replaced by API integration)
    chatbotMessages.innerHTML += `<div class="bot-message"><strong>Gideon:</strong> I am processing your request...</div>`;

    // Scroll to the bottom of the chat
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Here you would implement the API call to get the response from the backend
}

// Function to handle uploading notes
function uploadNotes() {
    const uploadInput = document.getElementById('notes-upload');
    const contentType = document.getElementById('content-type').value;
    const uploadStatus = document.getElementById('upload-status');
    const quizSection = document.getElementById('quiz-section');
    const quizQuestionsDiv = document.getElementById('quiz-questions');

    if (uploadInput.files.length === 0 || !contentType) {
        alert('Please upload a file and select a content type.');
        return;
    }

    const file = uploadInput.files[0];
    const formData = new FormData();
    formData.append('notes', file);
    formData.append('contentType', contentType);

    uploadStatus.innerHTML = 'Uploading and processing your notes...';

    fetch('/upload-notes', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        uploadStatus.innerHTML = `Content Generated: ${data.message}`;

        if (contentType === 'quiz') {
            quizSection.style.display = 'block';
            quizQuestionsDiv.innerHTML = '';

            // Assuming the generated data.message is a list of questions
            const questions = data.message.questions;
            questions.forEach((question, index) => {
                quizQuestionsDiv.innerHTML += `
                    <div class="quiz-question">
                        <p>${index + 1}. ${question.question}</p>
                        <input type="text" id="answer-${index}" placeholder="Your answer">
                    </div>
                `;
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        uploadStatus.innerHTML = 'An error occurred while uploading your notes.';
    });
}

// Function to submit the quiz
function submitQuiz() {
    const quizQuestionsDiv = document.getElementById('quiz-questions');
    const answers = [];

    const questionElements = quizQuestionsDiv.getElementsByClassName('quiz-question');
    for (let i = 0; i < questionElements.length; i++) {
        const answerInput = document.getElementById(`answer-${i}`);
        answers.push(answerInput.value);
    }

    // Send answers to the backend for evaluation
    fetch('/evaluate-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: answers }),
    })
    .then(response => response.json())
    .then(data => {
        const quizResultDiv = document.getElementById('quiz-result');
        quizResultDiv.innerHTML = `You scored: ${data.percentage}%`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('quiz-result').innerHTML = 'An error occurred while evaluating your quiz.';
    });
}
