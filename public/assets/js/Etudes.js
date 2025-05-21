
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
})



function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.classList.contains('active')) {
        section.classList.remove('active');
    } else {
        section.classList.add('active');
    }
}

document.querySelectorAll(".Options_bloc h3").forEach(function(option) {
    option.addEventListener("click", function() {
        const sectionDetails = document.querySelector("." + this.classList[0] + "_details");
        sectionDetails.classList.toggle("active");
    });
});
