document.addEventListener("DOMContentLoaded", () => {
    const posts = JSON.parse(localStorage.getItem("spotEasePosts") || "[]");
    const container = document.getElementById("postsContainer");
    const emptyState = document.getElementById("emptyState");

    container.innerHTML = "";

    if (posts.length === 0) {
        emptyState.classList.remove("d-none");
        return;
    }

    posts.forEach((post, index) => {
        const card = document.createElement("div");
        card.className = "col-12";

        card.innerHTML = `
            <div class="card post-card p-4">
                <h4>${post.title}</h4>

                <p class="post-meta">
                    [${post.category}]  •  by ${post.username}  •  ${post.time}
                </p>

                <p>${post.content.substring(0, 80)}...</p>

                <a href="post.html?id=${index}" class="btn btn-sm btn-primary mt-2">View Full Post</a>
            </div>
        `;

        container.appendChild(card);
    });
});
