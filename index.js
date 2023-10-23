function scrollToAnchor(anchorId, marginTop) {
    var element = document.getElementById(anchorId);
    var offsetTop = element.offsetTop - marginTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}