//your JS code here. If required.
// Create an array of 3 promises
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1'), Math.random() * 3000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2'), Math.random() * 3000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3'), Math.random() * 3000 + 1000))
];

// Function to populate the table with the results
function populateTable(results) {
  const output = document.getElementById('output');
  results.forEach((result, index) => {
    const row = document.createElement('tr');
    const promiseName = document.createElement('td');
    const timeTaken = document.createElement('td');
    promiseName.textContent = result.promiseName;
    timeTaken.textContent = result.timeTaken;
    row.appendChild(promiseName);
    row.appendChild(timeTaken);
    output.appendChild(row);
  });
}

// Function to calculate the total time taken
function calculateTotalTime(results) {
  const totalTime = results.reduce((total, result) => total + result.timeTaken, 0);
  return { promiseName: 'Total', timeTaken: totalTime.toFixed(2) };
}

// Wait for all promises to resolve using Promise.all
Promise.all(promises.map((promise, index) => promise.then((result) => ({ promiseName: `Promise ${index + 1}`, timeTaken: (Math.random() * 3000 + 1000).toFixed(2) }))))
  .then((results) => {
    populateTable(results);
    const totalTimeResult = calculateTotalTime(results);
    populateTable([totalTimeResult]);
  });