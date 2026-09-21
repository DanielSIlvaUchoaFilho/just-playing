document.addEventListener("DOMContentLoaded", () => {
    // rating

    const stars = document.querySelectorAll(".star");
    const message = document.querySelector(".rating .message");
    const ratingContainer = document.querySelector(".stars");

    const messages = [
        "tu é burro",
        "sabe de nada",
        "mais ou menos",
        "da p melhorar",
        "vamooooooooooooooo",
    ];

    let selectedRating = 0;

    const updateRating = (rating) => {
        stars.forEach((star) => {
            const starRating = Number(star.dataset.rating);

            star.classList.toggle("active", starRating <= rating);
        });
    };

    const updateMessage = (rating) => {
        if (rating === 0) {
            return;
        }

        message.textContent = messages[rating - 1];
    };

    stars.forEach((star) => {
        const rating = Number(star.dataset.rating);

        star.addEventListener("mouseenter", () => {
            updateRating(rating);
            updateMessage(rating);
        });

        star.addEventListener("click", () => {
            selectedRating = rating;

            updateRating(selectedRating);
            updateMessage(selectedRating);
        });
    });

    ratingContainer.addEventListener("mouseleave", () => {
        updateRating(selectedRating);
        updateMessage(selectedRating);
    });

    // form

    const setMinimumDate = () => {
        const date = document.querySelector("#date");

        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        date.min = `${year}-${month}-${day}`;
    };

    document.addEventListener("click", setMinimumDate);
});
