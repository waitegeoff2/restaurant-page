import frogImg from "./images/frog.jpg";
const content = document.querySelector("#content");


function homeContent () {    
    // reset page each time

    content.innerHTML = "";

    //HEADING DIV

    const headingDiv = document.createElement("div");
    headingDiv.classList.add("headingDiv");
    content.appendChild(headingDiv);

    const homeHeading = document.createElement("h1");
    homeHeading.classList.add("homeHeading");
    homeHeading.textContent = "Geoff's Restaurant"
    headingDiv.appendChild(homeHeading);

    //IMAGE DIV

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");
    content.appendChild(imageDiv);

    const homeImage = document.createElement("img");
    homeImage.src = frogImg;
    homeImage.classList.add("homeImage");
    imageDiv.appendChild(homeImage);

    //DESCRIPTION DIV

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionDiv");
    content.appendChild(descriptionDiv);

    const homeDescription = document.createElement("p");
    homeDescription.textContent = "This is a great restaurant. It's not a restaurant where you eat frogs. The frog is just the logo for the restaurant."
    descriptionDiv.appendChild(homeDescription);

}

export { homeContent };