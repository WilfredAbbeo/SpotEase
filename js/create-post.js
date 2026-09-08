document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();
    const category = document.getElementById("postCategory").value;
    const username = localStorage.getItem("spotEaseLoggedInUser");

    const anonymous = document.getElementById("postAnonymous").checked;

    const posts = JSON.parse(localStorage.getItem("spotEasePosts") || "[]");

    const newPost = {
        title,
        content,
        category,
        username: anonymous ? "Anonymous" : username,
        time: new Date().toLocaleString()
    };

    posts.push(newPost);
    localStorage.setItem("spotEasePosts", JSON.stringify(posts));

    window.location.href = "board.html";
});
