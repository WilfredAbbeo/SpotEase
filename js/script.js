// ============== Reviews System (Each page gets its own storage key) ==============

// =========== load reviews for each page ===========
const page = window.location.pathname.split("/").pop().split(".")[0];
const reviewKey = "reviews_" + page;

document.addEventListener("DOMContentLoaded", showReviews);

function showReviews() {
    const container = document.getElementById("reviewList");
    if (!container) return;

    let reviews = JSON.parse(localStorage.getItem(reviewKey) || "[]");
    if (reviews.length === 0) {
        container.innerHTML = "<p class='text-muted small'>No reviews yet. Be the first!</p>";
        return;
    }

    let html = "";
    for (let r of reviews) {
        html += `
        <div class="border rounded p-3 mb-2 small shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-1">
                <strong>${r.name}</strong>
                <span class="text-muted">${r.date || ""}</span>
            </div>
            <div class="text-warning mb-1">${"⭐".repeat(r.rating)}</div>
            <div class="text-muted">${r.text}</div>
        </div>`;
    }

    container.innerHTML = html;
}

// =========== handle review submit ===========
document.getElementById("reviewForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if you have logged in
    const loginUser = localStorage.getItem("spotEaseLoggedInUser");
    if (!loginUser) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    const name = document.getElementById("reviewName").value.trim();
    const rating = document.getElementById("reviewRating").value.trim();
    const text = document.getElementById("reviewText").value.trim();
    if (!name || !rating || !text) {
        alert("All fields are required!");
        return;
    }

    const newReview = {
        name: name,
        rating: Number(rating),
        text: text,
        date: new Date().toLocaleDateString()
    };

    let reviews = JSON.parse(localStorage.getItem(reviewKey) || "[]");
    reviews.unshift(newReview);
    localStorage.setItem(reviewKey, JSON.stringify(reviews));

    showReviews();

    document.getElementById("reviewForm").reset();
});






//====== FILTERING=====

function applyFilters() {
    const noise = document.getElementById("noise-filter").value;
    const openHours = document.getElementById("open-hours").value;
    const capacity = document.getElementById("capacity").value;

    const checkOutlets = document.getElementById("outlets").checked;
    const checkWifi = document.getElementById("wifi").checked;
    const checkWhiteboard = document.getElementById("whiteboard").checked;
    const checkGroup = document.getElementById("group").checked;
    const checkCouches = document.getElementById("couches").checked;
    const checkIndividual = document.getElementById("individual-seats").checked;
    const checkWindow = document.getElementById("window-seats").checked;
    const checkPrinting = document.getElementById("printing").checked;
    const checkFood = document.getElementById("food-allowed").checked;

    const spaces = document.querySelectorAll(".space-item");

    spaces.forEach(space => {
        let show = true;

        // Noise filter
        if (noise && space.dataset.noise !== noise) show = false;

        // Open hours
        if (openHours && space.dataset.hours !== openHours) show = false;

        // Capacity
        if (capacity && space.dataset.capacity !== capacity) show = false;

        // Amenity filters
        if (checkOutlets && space.dataset.outlets !== "true") show = false;
        if (checkWifi && space.dataset.wifi !== "true") show = false;
        if (checkWhiteboard && space.dataset.whiteboard !== "true") show = false;
        if (checkGroup && space.dataset.group !== "true") show = false;
        if (checkCouches && space.dataset.couches !== "true") show = false;
        if (checkIndividual && space.dataset.individual !== "true") show = false;
        if (checkWindow && space.dataset.window !== "true") show = false;
        if (checkPrinting && space.dataset.printing !== "true") show = false;
        if (checkFood && space.dataset.food !== "true") show = false;

        // Show/hide
        space.style.display = show ? "" : "none";
    });
}

function resetFilters() {
    document.querySelectorAll(".form-select, .form-check-input")
        .forEach(el => { 
            if (el.type === "checkbox") el.checked = false;
            else el.value = "";
        });
    applyFilters();
}



//=====reservation====

<script>
function reserveSlot() {
    const timeSlot = document.querySelector('input[name="timeSlot"]:checked')?.value;
    const room = document.querySelector('input[name="room"]:checked')?.value;
    if (timeSlot && room) {
        alert(`Reservation confirmed for ${room} at ${timeSlot}.`);
    } else {
        alert("Please select a time slot and room.");
    }
}
</script>

