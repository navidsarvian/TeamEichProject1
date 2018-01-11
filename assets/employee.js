var trow = $("<tr>");
var tcell = $("<td>");
//Capture the value of user input
//Append those values each tcell
//Append each tcell to the trow
//Take the Div identification and dynamically append the child elements
//Push into main element
var config = {
    apiKey: "AIzaSyC1AVGKwfh0TBc5fUxcqqi8b7k_F1rVSio",
    authDomain: "employee-rate-project.firebaseapp.com",
    databaseURL: "https://employee-rate-project.firebaseio.com",
    projectId: "employee-rate-project",
};
firebase.initializeApp(config);
// Create a variable to reference the database.
var database = firebase.database();
// Initial Values
var name = "";
var role = "";
var date = 0;
var pay = "";
// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();
  // Grabbed values from text boxes
  name = $("#example-text-input").val().trim();
  role = $("#example-role-input").val().trim();
  date = $("#example-datetime-local-input").val().trim();
  pay = $("#example-number-input").val().trim();
  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    date: date,
    pay: pay,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
// Firebase watcher + initial loader + order/limit HINT: .on("child_added"
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
  // storing the snapshot.val() in a variable for convenience
  var sv = snapshot.val();
  // Console.loging the last user's data
  console.log(sv.name);
  console.log(sv.role);
  console.log(sv.date);
  console.log(sv.pay);
  // Change the HTML to reflect
/*  $("#name-display").text(sv.name);
  $("#email-display").text(sv.role);
  $("#age-display").text(sv.date);
  $("#comment-display").text(sv.pay);
*/
  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
  database.ref().on('child_added', function(snapshot){
    $('#name').text(snapshot.val().name);
    $('#role').text(snapshot.val().role);
    $('#start-date').text(snapshot.val().role);
    $('#monthly-rate').text(snapshot.val().role);
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
})
});
