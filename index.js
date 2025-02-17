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