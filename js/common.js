window.onload = function() {
    const button = document.getElementById("info1btn");
    const firstBlock = document.getElementById("firstPage");

    button.addEventListener('click', function(e) {
        e.preventDefault();
        const toTop = Math.floor(firstBlock.getBoundingClientRect().top);
        window.scrollBy({ top: toTop, left: 0, behavior: "smooth"});
    });
};