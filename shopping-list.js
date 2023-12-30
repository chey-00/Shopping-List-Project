// link HTML elements to JS variables

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Event listener to a CLICK action on ADD ITEM button
// specify actions to be taken upon being clicked on
button.addEventListener("click", () => {
  const newItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const deleteBtn1 = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = newItem;

  listItem.appendChild(deleteBtn1);
  deleteBtn1.textContent = "Delete";

  list.appendChild(listItem);
  list.style.marginTop = "30px";
  listText.style.marginLeft = "50px";

  // event listener that upon detecting click will delete the item from the list
  deleteBtn1.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  /* focus() method added to the input element to highlight the input text box
   to display readiness to intake next item input */
  input.focus();
});
