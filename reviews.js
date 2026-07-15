import { database } from "./firebase-config.js";

import {
  ref,
  push,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

window.submitReview = function () {

    const name =
        document.getElementById("reviewName").value || "Anonymous";

    const rating =
        Number(document.getElementById("reviewRating").value);

    const comment =
        document.getElementById("reviewComment").value;

    if (!rating || comment.trim() === "") {
        alert("Please give a rating and write a review.");
        return;
    }

    const reviewsRef = ref(database, "reviews");

    const newReview = push(reviewsRef);

    set(newReview, {
        name,
        rating,
        comment,
        date: new Date().toLocaleDateString()
    });

    alert("Thank you for your review!");

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewComment").value = "";
    document.getElementById("reviewRating").value = "5";
};

const reviewsRef = ref(database, "reviews");

onValue(reviewsRef, (snapshot) => {

    const reviews = snapshot.val();

    if (!reviews) return;

    let total = 0;
    let count = 0;

    let html = "";

    Object.values(reviews).reverse().forEach(review => {

        total += review.rating;
        count++;

        html += `
        <div class="review-card">

            <h3>${"⭐".repeat(review.rating)}</h3>

            <p>${review.comment}</p>

            <small>${review.name} • ${review.date}</small>

        </div>
        `;

    });

    document.getElementById("reviews").innerHTML = html;

    document.getElementById("averageRating").innerHTML =
        (total / count).toFixed(1);

    document.getElementById("reviewCount").innerHTML =
        count;

});
