const content = document.querySelector("#content");

function aboutContent() {
    content.innerHTML = "";

    // about
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");
    content.appendChild(aboutDiv);

    const aboutHeading = document.createElement("h1");
    aboutHeading.classList.add("aboutHeading");
    aboutHeading.textContent = "About our establishment"
    aboutDiv.appendChild(aboutHeading);

    const aboutText = document.createElement("p");
    aboutText.classList.add("aboutText");
    aboutText.textContent = "This restaurant was started because the owner likes frogs. He was told not to make it all about frogs because people would think you go there to eat frogs - he did not listen and went ahead with the frog theme anyways. We were established in Toronto in 2024. Please enjoy our wonderful cuisine!"
    aboutDiv.appendChild(aboutText);

    //hours and phone number
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");
    content.appendChild(contactDiv);

    const hoursHeading = document.createElement("h1");
    hoursHeading.classList.add("hoursHeading");
    hoursHeading.textContent = "Hours"
    contactDiv.appendChild(hoursHeading);

    const hoursText = document.createElement("p");
    hoursText.classList.add("hoursText");
    hoursText.textContent = "We are open 24/7."
    contactDiv.appendChild(hoursText);

    //phone

    const phoneHeading = document.createElement("h1");
    phoneHeading.classList.add("phoneHeading");
    phoneHeading.textContent = "Phone"
    contactDiv.appendChild(phoneHeading);

    const phoneText = document.createElement("p");
    phoneText.classList.add("hoursText");
    phoneText.textContent = "We wanted to get a frog related one but instead it's 555-8995."
    contactDiv.appendChild(phoneText);

}

export {aboutContent};
