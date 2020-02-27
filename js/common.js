function distanceToTop(element) {
    return Math.floor(element.getBoundingClientRect().top);
}

function scrollToAnchor(anchorId) {
    const anchor = document.getElementById(anchorId);
    if(!anchor) return;
    const anchorTop = distanceToTop(anchor);

    window.scrollBy({top: anchorTop, left: 0, behavior: "smooth"});
}

window.onload = function() {
    //After page loads
    const introScrollBtn = document.getElementById("#introScrollBtn");
    const block1Anchor = document.getElementById("#ib1");

    console.log(introScrollBtn);
    console.log(block1Anchor);

    introScrollBtn.addEventListener("click", function () {
       scrollToAnchor(block1Anchor);
    });
    
    window.addEventListener("scroll", function() {

    });
    
};