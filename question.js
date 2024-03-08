let currentPuzzle = '';

var dataHtml = "";
var dataHtml1 = "";
const members = ['Sachin', 'Mohan', 'Raj'];
arrayOfPuzzl = "";
var indexOfQuery = "";
var totalAmount = 100; // Total amount to distribute
let remainingAmount = totalAmount;
function openPopup() {

    dataHtml = document.getElementById("popup");
    console.log(dataHtml);
    //dataHtml1 = document.getElementById("newbody");
    arrayOfPuzzle = [`
    <h2>Puzzle</h2>
    <div id="puzzleQuestions">
        <button onclick="selectPuzzle('easy')">Easy: 111 What is 2 + 2?</button><br>
        <p style="display:none" id="easy">4</p>
        <button onclick="selectPuzzle('medium')">Medium: What is the capital of Italy?</button><br>
        <p style="display:none" id="medium">4</p>
        <button onclick="selectPuzzle('hard')">Hard: How many continents are there?</button>
        <p style="display:none" id="hard">4</p>
     </div>
    <input type="text" id="answerInput" class="puzzle-input" style="display: none;">
    <button onclick="submitAnswer()" id="submitButton" class="submit-btn" style="display: none;">Submit</button>`, `
    <h2>Puzzle</h2>
    <div id="puzzleQuestions">
        <button onclick="selectPuzzle('easy')">Easy:22 What is 12 + 2?</button><br>
        <p style="display:none" id="easy">4</p>
        <button onclick="selectPuzzle('medium')">Medium: What is the capital of India?</button><br>
        <button onclick="selectPuzzle('hard')">Hard: How many continents 7 are there?</button>
     </div>
    <input type="text" id="answerInput" class="puzzle-input" style="display: none;">
    <button onclick="submitAnswer()" id="submitButton" class="submit-btn" style="display: none;">Submit</button>`]

    document.getElementById('popup').style.display = 'flex';
    // document.getElementById('puzzleContent').innerHTML = `
    // <h2>Puzzle</h2>
    // <div id="puzzleQuestions">
    //     <button onclick="selectPuzzle('easy')">Easy: What is 2 + 2?</button><br>
    //     <button onclick="selectPuzzle('medium')">Medium: What is the capital of Italy?</button><br>
    //     <button onclick="selectPuzzle('hard')">Hard: How many continents are there?</button>
    //  </div>
    // <input type="text" id="answerInput" class="puzzle-input" style="display: none;">
    // <button onclick="submitAnswer()" id="submitButton" class="submit-btn" style="display: none;">Submit</button>`;
    indexOfQuery = "";
    const randomNumber = Math.floor(Math.random() * 1);
    indexOfQuery = randomNumber;

    document.getElementById('puzzleContent').innerHTML = arrayOfPuzzle[randomNumber];
}

function selectPuzzle(type) {
    currentPuzzle = getPuzzleQuestion(type);
    document.getElementById('puzzleQuestions').innerHTML = currentPuzzle;
    document.getElementById('answerInput').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';

    startTimer();

}
var aswerData="";
var typeofselected="";
function getPuzzleQuestion(type) {
    // switch (type) {
    //     case 'easy':
    //         return '<p>Easy: What is 2 + 2?</p>';
    //     case 'medium':
    //         return '<p>Medium: What is the capital of Italy?</p>';
    //     case 'hard':
    //         return '<p>Hard: How many continents are there?</p>';
    //     default:
    //         return '';
    // }


    var easyData = arrayOfPuzzle[indexOfQuery] + "";
    console.log("Easy==>", easyData);

     aswerData=easyData
     typeofselected=type;

    // Create a temporary element to hold the HTML content
    const tempElement = document.createElement('div');
    // Set innerHTML of the temporary element to the dataMM string
    tempElement.innerHTML = easyData;
    // Extract text content from the temporary element
    const textContent = tempElement.textContent;
    // Now textContent contains the text from dataMM
    console.log("Available string==" + textContent);

    return getTextByType(type, easyData);



}

function submitAnswer() {
    const answer = document.getElementById('answerInput').value.trim().toLowerCase();
    const puzzleAnswer = currentPuzzle.toLowerCase();
    

   var validanswer= getTextByTypeData(typeofselected,aswerData);

   // arrayOfPuzzle[indexOfQuery] 

    if (answer === validanswer) {
       // alert('Correct!');
       if(typeofselected=="easy"){

        totalAmount=25;
        openDistributionPopup();
       }
       if(typeofselected=="medium"){

        totalAmount=50;
        openDistributionPopup();
       }
       if(typeofselected=="hard"){

        totalAmount=100;
        openDistributionPopup();
       }
        closePopup();
    } else {
        // alert('Incorrect! Try again.');
        const timeTaken = stopTimer(); // Stop the timer when the task is completed and get the elapsed time
  if (timeTaken !== null) {
    console.log("Time taken to complete the task:", timeTaken, "seconds");
}
        openDistributionPopup();
        closePopup();
        
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function handlePopupClick() {
    // alert("sdsdsdsd")

    openPopup();
}


var moneyContri = document.getElementById('popup1');
function openDistributionPopup() {
    const popup = document.getElementById('popup1');
    const memberInputs = document.getElementById('memberInputs');
    const totalAmountElement = document.getElementById('totalAmount');
    //const remainingAmountElement = document.getElementById('remainingAmount');

    totalAmountElement.textContent = totalAmount;
    //remainingAmountElement.textContent = remainingAmount;

    memberInputs.innerHTML = '';

    const uniqueArray = removeDuplicates(eligibleForMoney);

    uniqueArray.forEach(member => {
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = `
    <label for="${member}">${member}</label>
    <input type="number" id="${member}" name="${member}" class="contribute-input" placeholder="Enter amount">
        `;
        memberInputs.appendChild(inputGroup);
    });

    popup.style.display = 'flex';
}

function closeDistributionPopup() {
    document.getElementById('popup1').style.display = 'none';
}

// document.getElementById('distributionForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     let totalContributed = 0;

//     formData.forEach((amount, member) => {
//         totalContributed += parseInt(amount);
//     });

//     if (totalContributed !== totalAmount) {
//         alert('Total contributed amount should be equal to total amount');
//         return;
//     }

//     // Store the contributed amount of each member in local storage
//     members.forEach(member => {
//         const amount = formData.get(member);
//         localStorage.setItem(member, amount);
//     });

//     closeDistributionPopup();
// });

// document.querySelectorAll('.contribute-input').forEach(input => {
//     input.addEventListener('input', function () {
//         const amount = parseInt(this.value) || 0;
//         if (amount < totalAmount) {
//             this.setCustomValidity(`Minimum contribution amount should be ${totalAmount}`);
//         } else {
//             this.setCustomValidity('');
//         }
//     });
// });


function fnsaveData() {


    alert("Please enter")
}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('distributionForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        let totalContributed = 0;

        formData.forEach((amount, member) => {
            totalContributed += parseInt(amount);
        });

        if (totalContributed !== totalAmount) {
            alert('Total contributed amount should be equal to total amount');
            return;
        }

        // Store the contributed amount of each member in local storage
        eligibleForMoney.forEach(member => {
            const amount = formData.get(member);
            localStorage.setItem(member, amount);
        });

        closeDistributionPopup();
        openPopup();
    });

   
    var items = document.querySelectorAll("#user-item");
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            var itemName = item.textContent;
            alert("Clicked Item Name: " + itemName);
        });
    });

});

// Function to retrieve text content based on type
function getTextByType(type, dataMM) {

    const regexPattern = new RegExp(`<button onclick="selectPuzzle\\('${type}'\\)">\\s*(.*?)\\s*<\\/button>`);

    const match = regexPattern.exec(dataMM);

    const textContent = match ? match[1] : '';

    return textContent;
}

function getTextByTypeData(typeofselected,aswerData){
  

const regexPattern = new RegExp(`<button onclick="selectPuzzle\\('${typeofselected}'\\)">\\s*(.*?)\\s*<\\/button>[\\s\\S]*?<p.*?id="${typeofselected}">(.*?)<\\/p>`);
const match = regexPattern.exec(aswerData);
const result = match ? match[2].trim() : '';

console.log(result); // Output: 4

return result;
}



// Define variables to store start and end times
let startTime, endTime;

// Function to start the timer
function startTimer() {
    startTime = new Date(); // Capture the current time
}

// Function to stop the timer and calculate the elapsed time
function stopTimer() {
    if (startTime) {
        endTime = new Date(); // Capture the current time
        const elapsedTime = (endTime - startTime) / 1000; // Calculate elapsed time in seconds
        return elapsedTime;
    } else {
        console.error("Timer was not started.");
        return null;
    }
}

// Example usage:
//startTimer(); // Start the timer when the task begins
// Perform the task here

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
