document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const identifier = document.getElementById("loginIdentifier").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("spotEaseUser"));

    if (!storedUser) {
        alert("No user found. Please sign up first.");
        return;
    }

    if (
        (identifier === storedUser.username || identifier === storedUser.email)
        && password === storedUser.password
    ) {
        localStorage.setItem("spotEaseLoggedInUser", storedUser.username);

        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username/email or password.");
    }
});
