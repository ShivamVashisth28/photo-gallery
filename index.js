const scrollContainer = document.querySelector(".canvas");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
