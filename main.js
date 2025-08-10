onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {

  // On récupère les éléments dont on a besoin
  const popup = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('close-popup-btn');
  const body = document.body;

  // On crée la fonction qui va fermer le pop-up et lancer les animations
  function startAnimation() {
    // On cache le pop-up
    popup.style.display = 'none';

    // On retire la classe 'container' qui met en pause les animations du body
    body.classList.remove('container');
  }

  // On ajoute un écouteur d'événement sur le bouton "Fermer"
  closeBtn.addEventListener('click', startAnimation);

});