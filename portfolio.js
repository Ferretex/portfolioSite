var check = 0;

$(document).ready(onDocumentReady);

function onDocumentReady() {
    console.log("ready");
    
    $(".photo").on("click", onToggleClick);
}

function onToggleClick() {
    var img=this;
    if (img.height > 400) {
        $(img).animate({height: "300px"}, 1000);
        console.log("Yus");
    } else {
        $(img).animate({height: "800px"}, 1000);
        console.log("Yaint");
    }
}