// A. CHANGE THEME (Dark/Light Mode Toggle)
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// B. EDIT JOB TITLE
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector("#home span");
editJobBtn.onclick = function () {
    const newTitle = prompt("Enter new job title:");
    if (newTitle && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
};

// C. SHOW / HIDE SKILLS
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");
toggleSkillsBtn.onclick = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};

// D. LIVE CHARACTER COUNTER (Textarea)
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
msgBox.addEventListener("keyup", () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

// E. FORM VALIDATION
function validateForm() {
    const nameField = document.getElementById("nameField");
    const emailField = document.getElementById("emailField");

    if (nameField.value.trim() === "") {
        alert("Name cannot be empty!");
        return false;
    }

    if (emailField.value.trim() === "") {
        alert("Email cannot be empty!");
        return false;
    }

    if (!emailField.value.includes("@")) {
        alert("Email must contain @");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// F. AUTO DISPLAY TODAY'S DATE
const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
dateDisplay.textContent = "Today's Date: " + today.toDateString();

// G. EXTRA FEATURE (Profile Hover Border)
const profileImg = document.getElementById("profile-img");
profileImg.addEventListener("mouseover", function () {
    profileImg.style.border = "5px solid #1a73e8";
});
profileImg.addEventListener("mouseout", function () {
    profileImg.style.border = "5px solid transparent";
});