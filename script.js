// Select all relevant elements
const textareas = document.querySelectorAll('textarea');
const starts = document.querySelectorAll('.start');
const ends = document.querySelectorAll('.end');
const borders = document.querySelectorAll('#txt1, #txt2, #txt3');
const counters = document.querySelectorAll('.counter');

// Attach input event listeners to each textarea
textareas.forEach((textarea, idx) => {
  textarea.addEventListener('input', function () {
    // Update character count
    starts[idx].textContent = textarea.value.length;

    // Change color if character limit is reached
    if (textarea.value.length >= 250) {
      starts[idx].style.color = 'red';
      ends[idx].style.color = 'red';
      borders[idx].style.borderColor = 'red';
      counters[idx].style.color = 'red';
    } else {
      starts[idx].style.color = 'black';
      ends[idx].style.color = 'black';
      borders[idx].style.borderColor = '#000';
      counters[idx].style.color = 'inherit';
    }
  });
});