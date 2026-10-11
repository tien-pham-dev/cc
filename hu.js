function upDate(PreviewPic) {
    console.log("Event triggered");
    console.log("Alt:", PreviewPic.alt);
    console.log("Source:", PreviewPic.src);

    document.getElementById("image").innerHTML = PreviewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + PreviewPic.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded");

    var images = document.querySelectorAll(".gallery img");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }

    console.log("Tabindex added to all images");
}

window.onload = addTabFocus;