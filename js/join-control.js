// Only controls the homepage Join Community navigation

function checkLoginStatus() {
    return localStorage.getItem("spotEaseLoggedInUser") !== null;
}

document.addEventListener("DOMContentLoaded", function () {
    const joinBtn = document.getElementById("joinCommunityBtn");

    if (joinBtn) {
        joinBtn.addEventListener("click", function (e) {
            e.preventDefault(); // stop default link behavior

            if (!checkLoginStatus()) {
                window.location.href = "login.html"; 
            } else {
                window.location.href = "board.html";
            }
        });
    }
});
