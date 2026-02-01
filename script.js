function enterPortfolio() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
}

function showSection(sectionId) {
    document.querySelectorAll(".content").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}
