// Assignment 4: Simple Queueing System for Customer Service
// This program simulates a simple queueing system where customers can be added to a queue,
// Function to prompt and enqueue customers
function enqueueCustomers(defaultNames, queue) {
    // commit: Enqueue customers with prompt and default names
    for (let i = 0; i < defaultNames.length; i++) {
        let name = prompt(`Enter your name (Customer ${i + 1}):`, defaultNames[i]);
        queue.push(name);
        alert(`Welcome, ${name}! Your queue number is ${i + 1}.`);
    }
}

// Function to display the current queue in the console
function displayQueue(queue) {
    // commit: Display current queue in console
    console.log("Current Queue:");
    queue.forEach((name, idx) => {
        console.log(`${idx + 1}: ${name}`);
    });
}

// Function to service a customer by queue number
function serviceCustomer(queue) {
    // commit: Service customer by number and update queue
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
}

// Main program execution
(function main() {
    // commit: Main program execution
    let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    let queue = [];
    enqueueCustomers(initialCustomers, queue);
    displayQueue(queue);
    serviceCustomer(queue);
})();
//REFERENCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://www.w3schools.com/js/js_popup.asp
