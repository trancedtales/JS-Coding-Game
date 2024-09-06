// Define the current challenge
let currentChallenge = {
    description: "Write a function to unlock the door. The door unlocks when you return 'unlocked'.",
    codeValidation: function(userCode) {
      try {
        // Evaluate the user's code to see if it works
        eval(userCode);
        // Check if the function returns the correct value
        if (typeof unlockDoor === 'function' && unlockDoor() === 'unlocked') {
          return "Success! The door has been unlocked.";
        } else {
          return "Incorrect! Try returning 'unlocked' from the unlockDoor function.";
        }
      } catch (error) {
        return "Error: " + error.message;
      }
    }
  };
  
  // Update the challenge description on the page
  document.getElementById('challenge-text').innerText = currentChallenge.description;
  
  // Handle code submission
  document.getElementById('submit-code').addEventListener('click', function() {
    const userCode = document.getElementById('code-input').value;
    const result = currentChallenge.codeValidation(userCode);
    document.getElementById('result-output').innerText = result;
  });
  