window.addEventListener("DOMContentLoaded", function(e) {      //ensure the entire page has loaded first
    //query for all order buttons
    const orderButtons = this.document.querySelectorAll("button[data-order]");
    
    //iterate through all buttons found
    orderButtons.forEach(function(button) {
        //add a listener for click
        button.addEventListener("click", function(e) {
            // create constants for button and container to get data from
            const button = e.currentTarget;
            const container = button.parentNode;

            //store the text in individual elements
            const order = {

                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText

            };
            
            //use local storage to store data on the browser so nothing is sent to the server
            //JSON.stringify() will turn the entire order element into a readable string
            localStorage.setItem("order", JSON.stringify(order));

            // create a url by replacing part of the original with the desired destination
            const url = window.location.href.replace("pies.html", "order.html");
            // set the new url and have the window direct to a new page
            windows.location.href = url;


        });
    });

});