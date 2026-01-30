const categorySelect = document.getElementById("category");
const cards = document.getElementsByClassName("card");

categorySelect.addEventListener("change", () => {
    const value = categorySelect.value;

    for (let i = 0; i < cards.length; i++) {
        if (value === "all" || cards[i].classList.contains(value)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
});
