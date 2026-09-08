document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("spotEaseLoggedInUser");

    if (!loggedInUser) {
        alert("Please log in first to access this page.");
        window.location.href = "login.html";
    }
});
