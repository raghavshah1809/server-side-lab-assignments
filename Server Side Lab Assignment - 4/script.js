
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid weight and height.");
        return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').innerText = `Your BMI is: ${bmi}`;
}


function showAlert() {
    alert("This is an alert box!");
}

function showConfirm() {
    const result = confirm("Are you sure you want to delete this item?");
    if (result) {
        alert("Item deleted.");
    } else {
        alert("Deletion canceled.");
    }
}

function showPrompt() {
    const userInput = prompt("Please enter your name:");
    if (userInput) {
        document.getElementById('promptResult').innerText = `Hello, ${userInput}!`;
    }
}


function changeText() {
    document.getElementById('changeableText').innerText = "Text changed!";
}

function hoverEffect(isHovering) {
    const div = document.getElementById('hoverDiv');
    div.style.backgroundColor = isHovering ? "#ccc" : "#f0f0f0";
}

function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem) {
        const li = document.createElement('li');
        li.innerText = newItem;
        document.getElementById('dynamicList').appendChild(li);
        document.getElementById('newItem').value = '';
    }
}


function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    let isValid = true;

 
    if (!name) {
        document.getElementById('nameError').innerText = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }


    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = "Phone number must be 10 digits.";
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.";
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}


function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; 
    const city = 'London'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById('weatherResult').innerText = `Weather in ${city}: ${weather}, Temperature: ${temp}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}


function addTodo() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput) {
        const li = document.createElement('li');
        li.innerText = todoInput;
        li.onclick = function() {
            this.classList.toggle('completed');
        };
        document.getElementById('todoItems').appendChild(li);
        document.getElementById('todoInput').value = '';
    }
}


function sendMessage() {
    const userInput = document.getElementById('chatInput').value;
    if (userInput) {
        const chatbox = document.getElementById('chatbox');
        chatbox.innerHTML += `<p>You: ${userInput}</p>`;
        chatbox.innerHTML += `<p>Chatbot: I received your message: "${userInput}".</p>`;
        document.getElementById('chatInput').value = '';
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}