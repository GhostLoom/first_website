

function showAllProjects() {
  document.getElementById("animationProjects").style.display = "block";
  document.getElementById("programmingProjects").style.display = "block";
}

function showAnimationProjects() {
  document.getElementById("animationProjects").style.display = "block";
  document.getElementById("programmingProjects").style.display = "none";
}

function showProgrammingProjects() {
  document.getElementById("animationProjects").style.display = "none";
  document.getElementById("programmingProjects").style.display = "block";
}

function checkContactForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email.trim() === "" || email.indexOf("@") === -1) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (message.trim().length < 10) {
    alert("Message must be at least 10 characters long.");
    return false;
  }

  alert("Message sent! (demo)");
  return true;
}




function toggleFunFact() {

  var fact = document.getElementById("funFact");

  if (!fact) {
    return;
  }

  if (fact.style.display === "none" || fact.style.display === "") {

    fact.style.display = "block";
  } else {

    fact.style.display = "none";
  }
}