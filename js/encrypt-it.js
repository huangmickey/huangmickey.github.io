/*
 * Starter file 
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  console.log("Window loaded!");
  /**
   * Initializing all button event listeners
   */
  function init() {
    // Encrypt Button Event Listener
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", encryptButtonHandler);
    // Reset Button Event Listener
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetButtonHandler)
    // Font Size 12pt Radio Button Event Listener 
    let radioFont12 = document.getElementById("radio-font12");
    radioFont12.addEventListener("click", fontSize12Handler);
    // Font Size 24pt Radio Button Event Listener 
    let radioFont24 = document.getElementById("radio-font24");
    radioFont24.addEventListener("click", fontSize24Handler);
    // All Caps Button Event Listener
    let allCapsCheckbox = document.getElementById("all-caps");
    allCapsCheckbox.addEventListener("click", allCapsHandler)
  }
  /**
   * Encrypt Button Handler
   */
  function encryptButtonHandler() {
    console.log("Encrypt Button Clicked");
    let textInput = document.getElementById("input-text").value;
    let cipherResult = shiftCipher(textInput);
    // console.log(cipherResult);
    document.getElementById("result").textContent = cipherResult;
  }
  /**
   * Reset Button Handler
   */
  function resetButtonHandler() {
    console.log("Reset Button Clicked");
    document.getElementById("result").textContent = "";
    document.getElementById("input-text").value = "";
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }


  function fontSize12Handler() {
    let textInput = document.getElementById("input-text");
    if (document.getElementById("radio-font12").checked) {
      textInput.style.fontSize = "12pt";
    }
  }

  function fontSize24Handler() {
    let textInput = document.getElementById("input-text");
    if (document.getElementById("radio-font24").checked) {
      textInput.style.fontSize = "24pt";
    }
  }

  function allCapsHandler() {
    let textInput = document.getElementById("input-text");
    if (document.getElementById("all-caps").checked) {
      textInput.style.textTransform = "uppercase";
    }
    if (!document.getElementById("all-caps").checked) {
      textInput.style.textTransform = "lowercase";
    }
  }

})();
