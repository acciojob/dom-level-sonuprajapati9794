function findDomLevel() {
  // Get the target element
  let element = document.getElementById("level");

  let level = 0;

  // Traverse up the DOM tree
  while (element) {
    level++;
    element = element.parentElement;
  }

  // Show result
  alert("The level of the element is: " + level);
}

// Call function (ensure DOM is loaded)
window.onload = findDomLevel;
