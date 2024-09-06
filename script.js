// Define an array of challenges
const challenges = [
  {
    description: "Level 1: Write a function to unlock the door. The door unlocks when you return 'unlocked'.",
    codeValidation: function(userCode) {
      try {
        eval(userCode);
        if (typeof unlockDoor === 'function' && unlockDoor() === 'unlocked') {
          return "Success! The door has been unlocked.";
        } else {
          return "Incorrect! Try returning 'unlocked' from the unlockDoor function.";
        }
      } catch (error) {
        return "Error: " + error.message;
      }
    }
  },
  {
    description: "Level 2: Write a function that returns 'bridge built' when called.",
    codeValidation: function(userCode) {
      try {
        eval(userCode);
        if (typeof buildBridge === 'function' && buildBridge() === 'bridge built') {
          return "Success! The bridge has been built.";
        } else {
          return "Incorrect! Try returning 'bridge built' from the buildBridge function.";
        }
      } catch (error) {
        return "Error: " + error.message;
      }
    }
  },
  {
    description: "Level 3: Write a function that takes an array of numbers and returns the sum.",
    codeValidation: function(userCode) {
      try {
        eval(userCode);
        if (typeof sumArray === 'function' && sumArray([1, 2, 3]) === 6) {
          return "Success! The sum is correct.";
        } else {
          return "Incorrect! Make sure your function returns the sum of the array.";
        }
      } catch (error) {
        return "Error: " + error.message;
      }
    }
  }
];

let currentLevel = 0;

// Function to load the current challenge
function loadChallenge() {
  if (currentLevel < challenges.length) {
    document.getElementById('challenge-text').innerText = challenges[currentLevel].description;
    document.getElementById('result-output').innerText = '';
    document.getElementById('code-input').value = '';
    document.getElementById('result-output').classList.remove('glow'); // Remove glow effect if present
  } else {
    document.getElementById('challenge-text').innerText = "Congratulations! You've completed all the levels!";
    document.getElementById('input-container').style.display = 'none'; // Hide input after finishing all levels
  }
}

// Handle code submission
document.getElementById('submit-code').addEventListener('click', function() {
  const userCode = document.getElementById('code-input').value;
  const result = challenges[currentLevel].codeValidation(userCode);
  const resultOutput = document.getElementById('result-output');
  resultOutput.innerText = result;

  if (result.includes('Success')) {
    resultOutput.classList.add('glow'); // Add glowing effect when success
    currentLevel++;
    setTimeout(() => {
      resultOutput.classList.remove('glow'); // Remove glow before moving to the next challenge
      loadChallenge();
    }, 2000); // Wait for 2 seconds before loading the next level
  }
});

// Load the first challenge when the page loads
loadChallenge();
