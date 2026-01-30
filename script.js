const textArea = document.getElementById("text");
const count = document.getElementById("count");

textArea.addEventListener("input", () => {
    count.innerText = textArea.value.length;
});
