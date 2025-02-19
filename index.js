// section2


function toggleDescription(element) {
    console.log(element);
    let description = element.nextElementSibling;
    console.log(description);
    let icon = element.querySelector(".icon");

    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        icon.textContent = "−";
    } else {
        description.style.display = "none";
        icon.textContent = "+";
    }
}

var titleText = document.title + " "; 
var speed = 300; 

function animateTitle() {
  document.title = titleText;
  titleText = titleText.substring(1) + titleText.charAt(0);
  setTimeout(animateTitle, speed);
}


window.onload = animateTitle;