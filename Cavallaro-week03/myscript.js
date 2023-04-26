/*
Form to collect user input in the html file
Have js detect when the form is submitted
Via js have a way to collect the data input
JS process the data into a message
JS to output feedback to the user
*/

let jobHiring = document.getElementById("formApplyNow");

function fnjobHiring(event) {
  event.preventDefault(); //stops the refresh

  //Read the values of the <inputs> from the <form>
  let objFirstName = document.getElementById("formFirstName").value;
  let objLastName = document.getElementById("formLastName").value;
  let objEmailAddress = document.getElementById("formEmailAddress").value;
  let objReason = document.getElementById("Reason").value;
  // check what was typed
  console.log(objFirstName, objLastName, objEmailAddress, objReason);

  //Combine the 3 pieces of data into one sentence

  let popUpMessage =
    "Thank you " +
    objFirstName +
    " " +
    objLastName +
    ", " +
    "your email: " +
    objEmailAddress +
    ", " +
    "and the following message: " +
    objReason +
    ";" +
    " " +
    "has been sent successfully!";

  // Popup to confirm with the user
  window.alert(popUpMessage);
}

// Detect when the <form> aka formEmail is submitted
jobHiring.addEventListener("submit", function (event) {
  fnjobHiring(event);
});
