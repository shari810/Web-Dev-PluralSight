window.addEventListener("DOMContentLoaded", function(e){
    console.log("The page is loaded");

    let btn = this.document.querySelector("#click-me");
    btn.addEventListener("click", function(e) {
        console.log("The button was clicked.");
    });
});

