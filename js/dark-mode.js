// Seleccionar el botón de modo oscuro
let darkModeToggle = document.getElementById('darkModeToggle');

// Escuchar el evento 'click' en el botón
darkModeToggle.addEventListener('click', function () {
    // Toggle de la clase 'dark-mode' en el elemento 'body'
    document.body.classList.toggle('dark-mode');

    // Toggle de la clase 'dark-mode' en el elemento 'header'
    let header = document.getElementsByTagName('header')[0];
    header.classList.toggle('dark-mode');

    // Toggle de la clase 'dark-mode' en el elemento 'aside'
    let aside = document.getElementsByTagName('aside')[0];
    aside.classList.toggle('dark-mode');

    // Toggle de la clase 'dark-mode' en el elemento 'main'
    let main = document.getElementsByTagName('main')[0];
    main.classList.toggle('dark-mode');

    // Toggle de la clase 'dark-mode' en el elemento 'footer'
    let footer = document.getElementsByTagName('footer')[0];
    footer.classList.toggle('dark-mode');
});
