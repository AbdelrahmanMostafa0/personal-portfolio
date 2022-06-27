let navIcon = document.getElementById("nav-icon");

navIcon.addEventListener("click", e=> {
    let element = document.getElementById("nav-list")
    element.classList.toggle("nav-active");

})