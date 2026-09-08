document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!username || !email || !password) {
        alert("All fields are required.");
        return;
    }

    const userData = { username, email, password };
    localStorage.setItem("spotEaseUser", JSON.stringify(userData));

    alert("Account created successfully!");
    window.location.href = "login.html";
});
