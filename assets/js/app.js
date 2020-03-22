AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
});
scrollToAnchor();

function scrollToAnchor() {
    document.querySelectorAll('.scroll-btn ').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

var projectDataObjects = [
    {
        id: 1,
        title: 'Danzicard',
        imgUrl: 'assets/img/projects/danzicard.gif',
        content: 'It is a chinese learning app made with Ionic/Angular. dfsdfsdfdsfdsfdsfd'
    },
    {
        id: 2,
        title: 'Training Tracker',
        imgUrl: 'assets/img/projects/danzicard.gif',
        content: 'It is a training tracker app made with Ionic/Angular and Symfony Restful Api.'
    }
];
$(document).ready(function () {
    console.log("ready!");

    $('#projectModal').on('show.bs.modal', function (event) {
        var card = $(event.relatedTarget);
        var index = card.data('index');
        var modal = $(this);
        var project = projectDataObjects.find(project => project.id === index);
        if(project){
            modal.find('.modal-title').text(project.title);
            modal.find('.modal-body img').attr('src', project.imgUrl);
            modal.find('.modal-footer').text(project.content);
        }
    })
});