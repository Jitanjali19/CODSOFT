
function openResume() {
    window.open('https://docs.google.com/document/d/1JHFJTISnr1GoBbT77glhHE3kQpml17ZFe8xT6UCrWrI/edit', '_blank');
  }

  document.getElementById("showSkills").onclick = function() {
    var skillsDiv = document.getElementById("skillsLabel");
    if (skillsDiv.style.display === "none" || skillsDiv.style.display === "") {
        skillsDiv.style.display = "block"; // Show skills
        this.textContent = "Hide Skills"; // Change link text
    } else {
        skillsDiv.style.display = "none"; // Hide skills
        this.textContent = "Show Skills"; // Change link text
    }
};


document.getElementById("aboutMe").onclick = function() {
    var skillsDiv = document.getElementById("Aboutsection");
    if (skillsDiv.style.display === "none" || skillsDiv.style.display === "") {
        skillsDiv.style.display = "block"; // show
        this.textContent = "Hide"; // Change link text
    } else {
        skillsDiv.style.display = "none"; // Hide 
        this.textContent = "About Me"; // Change link text
    }
};