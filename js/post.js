document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const posts = JSON.parse(localStorage.getItem("spotEasePosts") || "[]");
    const post = posts[id];

    if (!post) {
        document.getElementById("postTitle").textContent = "Post not found";
        return;
    }

    document.getElementById("postTitle").textContent = post.title;

    document.getElementById("postMeta").textContent =
        `[${post.category}]  •  by ${post.username}  •  ${post.time}`;

    document.getElementById("postContent").textContent = post.content;
});
