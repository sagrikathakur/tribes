const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const movieList = movieLists[i];
    const items = movieList.querySelectorAll(".movie-list-item").length;
    let clickCounter = 0;

    const visibleItems = Math.floor(window.innerWidth / 270); // Number of items visible at once
    const maxTranslateX = (items - visibleItems) * -300; // Ensures it stops before touching sidebar

    arrow.addEventListener("click", () => {
        let currentTransform = window.getComputedStyle(movieList).transform;

        let currentTranslateX = currentTransform !== "none"
            ? parseInt(currentTransform.split(",")[4])
            : 0;

        if (clickCounter < items - visibleItems) {
            clickCounter++;
            let newTranslateX = currentTranslateX - 300;

            // Prevent moving beyond maxTranslateX
            if (newTranslateX >= maxTranslateX) {
                movieList.style.transform = `translateX(${newTranslateX}px)`;
            }
        } else {
            movieList.style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});
