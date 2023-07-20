let darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');

    
    let header = document.getElementsByTagName('header')[0];
    header.classList.toggle('dark-mode');


    let aside = document.getElementsByTagName('aside')[0];
    aside.classList.toggle('dark-mode');


    let main = document.getElementsByTagName('main')[0];
    main.classList.toggle('dark-mode');


    let footer = document.getElementsByTagName('footer')[0];
    footer.classList.toggle('dark-mode');
});
