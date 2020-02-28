function scroll(el) {
    const toTop = Math.floor(el.getBoundingClientRect().top);
    window.scrollBy({ top: toTop, left: 0, behavior: "smooth"});
}

window.onload = function() {
    const info1btn = document.getElementById("info1btn");
    const introBtn = document.getElementById("introScrollBtn");

    const firstBlock = document.getElementById("firstPage");
    const infoBlock1 = document.getElementById("ib1");

    info1btn.addEventListener('click', function(e) {
        e.preventDefault();
        scroll(firstBlock);
    });

    introBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scroll(infoBlock1);
    });
};