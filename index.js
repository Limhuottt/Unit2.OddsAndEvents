// State
const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

// Sort function
function sortNumber(num) {
  if (num % 2 === 0) {
    state.evenNumbers.push(num);
  } else {
    state.oddNumbers.push(num);
  }
}

// UI: Form to input number
function createForm() {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter a number";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add number";
  addBtn.type = "submit";

  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.type = "button";

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.type = "button";

  // Add number to bank
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = Number(input.value);
    if (!isNaN(value)) {
      state.numberBank.push(value);
      input.value = "";
      render();
    }
  });

  // Sort one number
  sortOneBtn.addEventListener("click", () => {
    const num = state.numberBank.shift();
    if (num !== undefined) sortNumber(num);
    render();
  });

  // Sort all numbers
  sortAllBtn.addEventListener("click", () => {
    while (state.numberBank.length > 0) {
      const num = state.numberBank.shift();
      sortNumber(num);
    }
    render();
  });

  form.appendChild(input);
  form.appendChild(addBtn);
  form.appendChild(sortOneBtn);
  form.appendChild(sortAllBtn);

  return form;
}

// UI: Display Number Bank
function createNumberBank() {
  const div = document.createElement("div");
  div.innerHTML = `<h3>Number Bank</h3><p>${state.numberBank.join(", ")}</p>`;
  return div;
}

// UI: Display Odd & Even
function createSortedLists() {
  const container = document.createElement("div");

  const oddDiv = document.createElement("div");
  oddDiv.innerHTML = `<h3>Odd Numbers</h3><p>${state.oddNumbers.join(", ")}</p>`;

  const evenDiv = document.createElement("div");
  evenDiv.innerHTML = `<h3>Even Numbers</h3><p>${state.evenNumbers.join(", ")}</p>`;

  container.appendChild(oddDiv);
  container.appendChild(evenDiv);
  return container;
}

// Render App
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(createForm());
  app.appendChild(createNumberBank());
  app.appendChild(createSortedLists());
}

// Initialize
render();
