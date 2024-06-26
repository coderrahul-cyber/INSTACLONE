const image = document.querySelector(".image-se");
const images = [
    {
        "img": "../img/default/screenshot1.png"
    },
    {
        "img": "../img/default/screenshot3.png"
    },
    {
        "img": "../img/default/screenshot4.png"
    },
];

let currentIndex = 0;

setInterval(() => {
    image.src = images[currentIndex].img;
    currentIndex = (currentIndex + 1) % images.length; // Increment index and wrap around if necessary
}, 3000);


const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");

function checkInputs() {
    if (usernameInput.value &&  passwordInput.value) {
        submitButton.removeAttribute('disabled');
        submitButton.style.backgroundColor = "";
        submitButton.style.cursor ="pointer" ;
    } else {
        submitButton.setAttribute('disabled', 'true');
        submitButton.style.backgroundColor = "gray";
        submitButton.style.cursor ="not-allowed" ;
    }
}

// Add event listeners to input fields
usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

// Call checkInputs initially
checkInputs();