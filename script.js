
// Get 'hamburger' icon 
let iconElement = document.getElementById('icon')


function showLinks() {
    // Select hidden links
    var element = document.getElementById("links");

    // If links are hidden, show 
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }

  iconElement.addEventListener('click', () => {
    showLinks();

    // Change hamburger icon to 'X' 
    iconElement.classList.toggle('close');
  })