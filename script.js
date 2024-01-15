//  <-- ---------------------------------JAVA SCRIPT------------------------------------- -->

function Addlist() {
  let input = document.querySelector(".inputDiv input");
  // console.log(input);
  let AddButton = document.querySelector(".inputDiv button");
  // console.log(AddButton);
  let ul = document.querySelector(".ListDiv ul");
  // console.log(ul);
  AddButton.addEventListener("click", () => {
    let listItemText = input.value;
    // console.log(listItemText);
    // console.log("inside the event function..");

    // ------------adding list--------
    if (listItemText.trim() !== "") {
      var listItem = document.createElement("li");
      var checkSpan = document.createElement("span");
      checkSpan.className = "check";
      var textSpan = document.createElement("span");
      textSpan.className = "spanText";
      textSpan.textContent = listItemText;
      var deleteSpan = document.createElement("span");
      deleteSpan.className = "delete";
      var spanImage2 = document.createElement("img");
      spanImage2.src = "images/delete-bin.png";
      spanImage2.alt = "*img";
      deleteSpan.appendChild(spanImage2);
      listItem.appendChild(checkSpan);
      listItem.appendChild(textSpan);
      listItem.appendChild(deleteSpan);
      ul.appendChild(listItem);
      // console.log("you'r li is ready", listItem);
      input.value = "";
      // To check_mark the class-------------- ->
      checkSpan.addEventListener("click", () => {
        console.log("clicked on check");
        if (
          checkSpan.classList.contains("checked") &&
          textSpan.classList.contains("cutText")
        ) {
          checkSpan.classList.remove("checked");
          textSpan.classList.remove("cutText");
        } else {
          checkSpan.classList.add("checked");
          textSpan.classList.add("cutText");
        }
      });
      // for deletion of listItem---------------- ->
      deleteSpan.addEventListener("click", () => {
        // console.log("delete working");
        listItem.remove();
      });
    } else {
      alert("you must write something first!");
    }
  });
}
Addlist();

// AddList click evnt endedd
