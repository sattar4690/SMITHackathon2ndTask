// Task 1: Palindrome Check
function checkPalindrome() {
    var inputString = document.getElementById('inputPalindrome').value.trim();
    var resultPalindrome = document.getElementById('resultPalindrome');
  
    if (inputString === '') {
      resultPalindrome.textContent = 'Please enter a string.';
      return;
    }
  
    var cleanStr = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    if (isPalindrome(cleanStr)) {
      resultPalindrome.textContent = 'Yes, it is a palindrome.';
    } else {
      resultPalindrome.textContent = 'No, it is not a palindrome.';
    }
  }
  
  function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
  
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1));
    }
  
    return false;
  }
  
  // Task 2: Minimum and Maximum Numbers
  function findMinMax() {
    var inputNumbers = document.getElementById('inputNumbers').value.trim();
    var resultMinMax = document.getElementById('resultMinMax');
  
    if (inputNumbers === '') {
      resultMinMax.textContent = 'Please enter numbers separated by commas.';
      return;
    }
  
    var numbers = inputNumbers.split(',').map(Number);
    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
  
    resultMinMax.textContent = `Minimum number: ${min}, Maximum number: ${max}`;
  }
  
  // Task 3: Missing Number Identification
  function findMissingNumber() {
    var series = [11, 12, 14, 15, 16, 18, 19, 20];
    var missingNumber = null;
  
    for (var i = 0; i < series.length - 1; i++) {
      if (series[i + 1] - series[i] !== 1) {
        missingNumber = series[i] + 1;
        break;
      }
    }
  
    var resultMissingNumber = document.getElementById('resultMissingNumber');
    resultMissingNumber.textContent = `Missing number: ${missingNumber}`;
  }
  