const links = document.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destino = link.getAttribute("href");

        document.querySelector(destino).scrollIntoView({
            behavior: "smooth"
        });

    });

});