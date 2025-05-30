// Assignment: Queue Management System
const defaultNames = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let queue = [];

//Enqueue customers with prompt and default names
// Customer enters their name, stored in queue
for (let i = 0; i < defaultNames.length; i++) {
    let name = prompt(`Enter your name (Customer ${i + 1}):`, defaultNames[i]);
    queue.push(name);
    alert(`Welcome, ${name}! Your queue number is ${i + 1}.`);
}

//Display current queue in console
// Display current queue
function displayQueue(q) {
    console.log("Current Queue:");
    q.forEach((name, idx) => {
        console.log(`${idx + 1}: ${name}`);
    });
}

displayQueue(queue);

//Service loop for servicing and removing customers
// Service loop
while (queue.length > 0) {
    let num = prompt(`Enter the queue number to be serviced (1-${queue.length}):`);
    num = parseInt(num);

    if (isNaN(num) || num < 1 || num > queue.length) {
        alert("Invalid number. Please try again.");
        continue;
    }

    let serviced = queue[num - 1];
    alert(`Now servicing: ${serviced}`);
    queue.splice(num - 1, 1);

    if (queue.length > 0) {
        displayQueue(queue);
    } else {
        alert("All customers have been serviced!");
        console.log("Queue is now empty.");
    }
}
// REFERENCE
// https://www.w3schools.com/js/js_popup.asp
// https://www.javascripttutorial.net/javascript-array-splice/