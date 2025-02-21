
const content = document.querySelector("#content");

function menuContent() {
    //wipe content
    content.innerHTML = "";


    //menu heading
    const menuHeadingDiv = document.createElement("div");
    menuHeadingDiv.classList.add("menuHeadingDiv");
    content.appendChild(menuHeadingDiv);

    const menuHeading = document.createElement("h1");
    menuHeading.classList.add("homeHeading");
    menuHeading.textContent = "Menu"
    menuHeadingDiv.appendChild(menuHeading);

    //Menu list
    const menuItemsList = document.createElement("ul");
    menuItemsList.classList.add("menuItemsList");
    content.appendChild(menuItemsList);

    //menu list items

    //item 1
    const menuItemOne = document.createElement("li");
    menuItemOne.classList.add("menuListItem");
    menuItemsList.appendChild(menuItemOne);

    const menuOneTitle = document.createElement("h2");
    menuOneTitle.classList.add("menuListTitle");
    menuOneTitle.textContent = "Frog burger";
    menuItemOne.appendChild(menuOneTitle);

    const menuOneDescription = document.createElement("span");
    menuOneDescription.classList.add("menuListDescription");
    menuOneDescription.textContent = "It's not made of frogs, it's just called the because the restaurant has a frog theme."
    menuItemOne.appendChild(menuOneDescription);

    //item 2
    const menuItemTwo = document.createElement("li");
    menuItemTwo.classList.add("menuListItem");
    menuItemsList.appendChild(menuItemTwo);

    const menuTwoTitle = document.createElement("h2");
    menuTwoTitle.classList.add("menuListTitle");
    menuTwoTitle.textContent = "Frog salad";
    menuItemTwo.appendChild(menuTwoTitle);

    const menuTwoDescription = document.createElement("span");
    menuTwoDescription.classList.add("menuListDescription");
    menuTwoDescription.textContent = "There aren't any frogs in the salad. Once again it's due to the blatant frog theme of this restaurant."
    menuItemTwo.appendChild(menuTwoDescription);

}

export { menuContent };