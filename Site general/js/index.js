/*********modale note*********/



document.addEventListener('DOMContentLoaded', function() {
    let buttonNote = document.querySelector(".note-button");

    let modaleNote = document.querySelector(".note");
    console.log(modaleNote)


    buttonNote.addEventListener('click', function() {



        modaleNote.classList.toggle('opacity');

        
            

            let rainbowGrid = document.querySelector('.grille-note');
            let rainbowBox = document.querySelectorAll('.box-rainbow');

            let merci = document.querySelector('.note-title');
            console.log(rainbowBox);
            rainbowBox[0].addEventListener('click', function() {

                rainbowBox[0].style.opacity = "1";
                rainbowBox[2].style.opacity = "1";
                merci.innerHTML = "Merci d'avoir vote";
                rainbowBox[2].style.opacity = "0";

                rainbowBox[1].style.opacity = "0";

            });
            rainbowBox[1].addEventListener('click', function() {

                rainbowBox[1].style.opacity = "1";
                merci.innerHTML = "Merci d'avoir vote";
                rainbowBox[0].style.opacity = "0";

                rainbowBox[2].style.opacity = "0";

            });
            rainbowBox[2].addEventListener('click', function() {

                rainbowBox[2].style.opacity = "1";
                merci.innerHTML = "Merci d'avoir vote";
                rainbowBox[0].style.opacity = "0";

                rainbowBox[1].style.opacity = "0";

            });
        





    });





});
