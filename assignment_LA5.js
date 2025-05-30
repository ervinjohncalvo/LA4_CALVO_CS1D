// Assignment: Queue Management System

//Simple hash function for customer names
// Simple hash function: sum of char codes mod table size
function simpleHash(name, size) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % size;
}

const tableSize = 5;
const defaultNames = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let hashTable = new Array(tableSize).fill(null);

//Store customer names in hash table with linear probing
// Customer enters their name, stored in hash table
for (let i = 0; i < defaultNames.length; i++) {
    let name = prompt(`Enter your name (Customer ${i + 1}):`, defaultNames[i]);
    let idx = simpleHash(name, tableSize);

    // Handle collision by linear probing
    while (hashTable[idx] !== null) {
        idx = (idx + 1) % tableSize;
    }
    hashTable[idx] = name;
    alert(`Welcome, ${name}! Your hashed number is ${idx + 1}.`);
}

//Display the current hash table in the console
// Display initial hash table
function displayHashTable(table) {
    console.log("Current Hashed Table:");
    table.forEach((name, idx) => {
        console.log(`${idx + 1}: ${name !== null ? name : "[empty]"}`);
    });
}

displayHashTable(hashTable);

//Service loop for removing customers from hash table
// Service loop
let remaining = defaultNames.length;
while (remaining > 0) {
    let num = prompt(`Enter the hashed number to be serviced (1-${tableSize}):`);
    num = parseInt(num);

    if (isNaN(num) || num < 1 || num > tableSize) {
        alert("Invalid number. Please try again.");
        continue;
    }

    let idx = num - 1;
    if (hashTable[idx] === null) {
        alert("No customer at this hashed number.");
        continue;
    }

    alert(`Now servicing: ${hashTable[idx]}`);
    hashTable[idx] = null;
    remaining--;

    displayHashTable(hashTable);

    if (remaining === 0) {
        alert("All customers have been serviced!");
        console.log("Hashed table is now empty.");
    }
}
// REFERENCE
// https://www.w3schools.com/js/js_popup.asp
// https://www.geeksforgeeks.org/hashing-set-1-introduction/