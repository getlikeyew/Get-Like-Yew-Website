/*Calorie Calculator*/
function calCount() {
  var gender = document.getElementById("gender").value;
  var actLevel = document.getElementById("actLevel").value;
  var age = document.getElementById("age").value;
  var x = "Estimated Daily Calories Needed: ";
  var cal;
    /*Male & Sedentary*/
  if (gender === "Male" && actLevel === "Sedentary") {
    switch (true) {
      case (age <= 3):
        cal = 1000;
        break;
      case (age <= 5):
        cal = 1200;
        break;
      case (age <= 8):
        cal = 1400;
        break;
      case (age <= 10):
        cal = 1600;
        break;
      case (age <= 12):
        cal = 1800;
        break;
      case (age <= 14):
      case (age >= 61):
        cal = 2000;
        break;
      case (age <= 15):
      case (age >= 41):
        cal = 2200;
        break;
      case (age <= 18):
      case (age >= 21):
        cal = 2400;
        break;
      case (age <= 20):
        cal = 2600;
        break;
      default:
        cal = "N/A";
    }
    document.getElementById("edcn").innerHTML = x + cal;
  }
  /*Male & Moderately Active*/
  if (gender === "Male" && actLevel === "Moderate") {
    switch (true) {
      case (age <= 2):
        cal = 1000;
        break;
      case (age <= 5):
        cal = 1400;
        break;
      case (age <= 8):
        cal = 1600;
        break;
      case (age <= 10):
        cal = 1800;
        break;
      case (age <= 11):
        cal = 2000;
        break;
      case (age <= 13):
      case (age >= 66):
        cal = 2200;
        break;
      case (age <= 14):
      case (age >= 46):
        cal = 2400;
        break;
      case (age <= 15):
      case (age >= 26):
        cal = 2600;
        break;
      case (age <= 25):
        cal = 2800;
        break;
      default:
        cal = "N/A";
    }
    document.getElementById("edcn").innerHTML = x + cal;
  }
  /*Male & Active*/
  if (gender === "Male" && actLevel === "Active") {
    switch (true) {
      case (age <= 2):
        cal = 1000;
        break;
      case (age <= 3):
        cal = 1400 ;
        break;
      case (age <= 5):
        cal = 1600;
        break;
      case (age <= 7):
        cal = 1800;
        break;
      case (age <= 9):
        cal = 2000;
        break;
      case (age <= 11):
        cal = 2200;
        break;
      case (age <= 12):
      case (age >= 76):
        cal = 2400;
        break;
      case (age <= 13):
      case (age >= 56):
        cal = 2600;
        break;
      case (age <= 14):
      case (age >= 36):
        cal = 2800;
        break;
      case (age <= 15):
      case (age >= 19):
        cal = 3000;
        break;
      case (age <= 18):
        cal = 3200;
        break;
      default:
        cal = "N/A";
    }
    document.getElementById("edcn").innerHTML = x + cal;
  }
  /*Female & Sedentary*/
  if (gender === "Female" && actLevel === "Sedentary") {
    switch (true) {
      case (age <= 3):
        cal = 1000;
        break;
      case (age <= 7):
        cal = 1200;
        break;
      case (age <= 10):
        cal = 1400;
        break;
      case (age <= 13):
      case (age >= 51):
        cal = 1600;
        break;
      case (age <= 18):
      case (age >= 26):
        cal = 1800;
        break;
      case (age <= 25):
        cal = 2000;
        break;
      default:
        cal = "N/A";
    }
    document.getElementById("edcn").innerHTML = x + cal;
  }
  /*Female & Moderately Active*/
  if (gender === "Female" && actLevel === "Moderate") {
    switch (true) {
      case (age <= 2):
        cal = 1000;
        break;
      case (age <= 3):
        cal = 1200;
        break;
      case (age <= 6):
        cal = 1400;
        break;
      case (age <= 9):
        cal = 1600;
        break;
      case (age <= 11):
      case (age >= 51):
        cal = 1800;
        break;
      case (age <= 18):
      case (age >= 26):
        cal = 2000;
        break;
      case (age <= 25):
        cal = 2200;
        break;
      default:
        cal = "N/A";
    }
    document.getElementById("edcn").innerHTML = x + cal;
  }
  /*Female & Active*/
  if (gender === "Female" && actLevel === "Active") {
    switch (true) {
      case (age <= 2):
        cal = 1000;
        break;
      case (age <= 4):
        cal = 1400;
        break;
      case (age <= 6):
        cal = 1600;
        break;
      case (age <= 9):
        cal = 1800;
        break;
      case (age <= 11):
      case (age >= 61):
        cal = 2000;
        break;
      case (age <= 13):
      case (age >= 31):
        cal = 2200;
        break;
      case (age <= 30):
        cal = 2200;
        break;
      default:
        cal = "N/A";
    }
    document.getElementById("edcn").innerHTML = x + cal;
  }
  /*AMDR Ranges */
  document.getElementById("amdr-carb").innerHTML = "Carbohydrate AMDR: " + Math.round(0.45 * cal) + "-" + Math.round(0.65 * cal);
  document.getElementById("amdr-protein").innerHTML = "Protein AMDR: " + Math.round(0.10 * cal) + "-" + Math.round(0.35 * cal);
  document.getElementById("amdr-fat").innerHTML = "Fat AMDR: " + Math.round(0.20 * cal) + "-" + Math.round(0.35 * cal);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var scroll = document.getElementById("scroll");

// Get the offset position of the navbar
var sticky = scroll.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    scroll.classList.add("sticky");
  } else {
    scroll.classList.remove("sticky");
  }
}





