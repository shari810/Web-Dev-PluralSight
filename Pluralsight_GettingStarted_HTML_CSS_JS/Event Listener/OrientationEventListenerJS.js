window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;

    console.log(`angle: ${ angle }, type: ${ type} `);
});