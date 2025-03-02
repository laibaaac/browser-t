const inputs = document.querySelectorAll("input[type='text'], input[type='email']");
const inputRadios = document.querySelectorAll("input[type='radio']");
const question_1 = document.getElementById("vraag1");
const question_2 = document.getElementById("vraag2");
const inputTextarea = document.getElementById("vraag3");


const question_4 = document.querySelector("#vraag4");
const question_5 = document.querySelector("#vraag5");
const question_6 = document.querySelector("#vraag6");


// Load input values when the page finishes loading
window.addEventListener('load', loadInput);
window.addEventListener('load', loadRadioValue);
window.addEventListener('load', loadValueTextarea);
window.addEventListener('load', function() {
  loadValueOfSelect(question_1);
  loadValueOfSelect(question_2);
});

// Save input values when they change
inputs.forEach(input => {
  input.addEventListener('input', saveInput);
});

// Save radio values when they change
inputRadios.forEach(radio => {
  radio.addEventListener('change', saveRadioValue);
});

// Save textarea value when it changes
inputTextarea.addEventListener('input', saveValueTextarea);

// Function to save input values in localStorage
function saveInput() {
  if (typeof localStorage !== 'undefined') {
    inputs.forEach(input => {
      const inputName = input.name;
      const inputValue = input.value;
      localStorage.setItem(inputName, inputValue);
    });
  }
}

// Function to load input values from localStorage
function loadInput() {
  if (typeof localStorage !== 'undefined') {
    inputs.forEach(input => {
      const inputName = input.name;
      const storedValue = localStorage.getItem(inputName);
      if (storedValue) {
        input.value = storedValue;
      }
    });
  }
}

// Function to save the value of a select element in localStorage
function saveValueOfSelect(input) {
  if (typeof localStorage !== 'undefined') {
    input.addEventListener('change', function() {
      const selectName = this.name;
      const selectValue = this.value;
      localStorage.setItem(selectName, selectValue);
    });
  }
}

// Function to load the value of a select element from localStorage
function loadValueOfSelect(input) {
  if (typeof localStorage !== 'undefined') {
    const selectName = input.name;
    const storedSelectValue = localStorage.getItem(selectName);
    if (storedSelectValue) {
      input.value = storedSelectValue;
    }
  }
}

// Function to save radio values in localStorage
function saveRadioValue() {
  if (typeof localStorage !== 'undefined') {
    inputRadios.forEach(radio => {
      const radioName = radio.name;
      const radioValue = radio.value;
      if (radio.checked) {
        localStorage.setItem(radioName, radioValue);
      }
    });
  }
}

// Function to load radio values from localStorage
function loadRadioValue() {
  if (typeof localStorage !== 'undefined') {
    inputRadios.forEach(input => {
      const radioName = input.name;
      const storedValue = localStorage.getItem(radioName);
      if (storedValue && input.value === storedValue) {
        input.checked = true;
      }
    });
  }
}

// Function to save textarea value in localStorage
function saveValueTextarea() {
  if (typeof localStorage !== 'undefined') {
    const textareaName = inputTextarea.name;
    const textareaValue = inputTextarea.value;
    localStorage.setItem(textareaName, textareaValue);
  }
}

// Function to load textarea value from localStorage
function loadValueTextarea() {
  if (typeof localStorage !== 'undefined') {
    const textareaName = inputTextarea.name;
    const storedValue = localStorage.getItem(textareaName);
    if (storedValue) {
      inputTextarea.value = storedValue;
    }
  }
}

// Update the question elements based on selected radio values
inputRadios.forEach(button => {
  button.addEventListener('change', () => {
    const radioName = button.name;
    const radioValue = button.value;

    if (button.checked) {
      switch (radioName) {
        case "waffs-lesstof":
          question_4.innerHTML = `Gegeven cijfer: ${radioValue}`;
          break;
        case "waffs-uitleg":
          question_5.innerHTML = `Gegeven cijfer: ${radioValue}`;
          break;
        case "waffs-inzicht":
          question_6.innerHTML = `Gegeven cijfer: ${radioValue}`;
          break;
          case "waffs-lesstof":
          question_4.innerHTML = `Gegeven cijfer: ${radioValue}`;
          break;
        case "waffs-uitleg":
          question_5.innerHTML = `Gegeven cijfer: ${radioValue}`;
          break;
        case "waffs-inzicht":
          question_6.innerHTML = `Gegeven cijfer: ${radioValue}`;
          break;
        // Andere vakken radiobutton erbij zetten
      }
    }
  });
});
