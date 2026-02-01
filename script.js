<<<<<<< HEAD
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
=======
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
>>>>>>> 4c23c99776a4536d521d3a91dbd3e6850351ac83
