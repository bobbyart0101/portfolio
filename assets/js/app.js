AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
    disable: 'mobile'
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
        title: 'Training Recorder',
        imgUrl: 'assets/img/projects/training-app.gif',
        content: '<p>It is a training recorder app. Users can create a new training type and add training sets with weight and repetitions\n' +
            '    to this type. In the chart area, users can query the data with the certain time to see the tendency of his training\n' +
            '    result.\n' +
            '    <br>\n' +
            '    This app is made with ionic/angular framework as frontend and Symfony API platform as backend. With jwt\n' +
            '    authentication, users can access their training data with security.\n' +
            '</p>\n'
    },
    {
        id: 2,
        title: 'Danzicard',
        imgUrl: 'assets/img/projects/danzicard.gif',
        content: '<p>Danzi means a single word in chinese. Danzicard is an app which aims to help users learn chinese word in an efficient\n' +
            '    way. Users can create a lesson and add the new words to expand their \'Danzi\'. For each card, users read the word, by tipping the\n' +
            '    flip card, it shows the meaning and pinyin on the backside. Users can add the lessons to the favorite list. <br> In\n' +
            '    the quiz session, the cards in a lesson shuffle in a random way for dynamic quiz experience. This app is made with\n' +
            '    Ionic/ Angular framework as front-end and firebase as backend. It utilizes firebase authentication.</p>'
    },
    {
        id: 3,
        title: 'Taiwan Traveler',
        imgUrl: 'assets/img/projects/twtraveler.gif',
        content: '<p>I did planned a trip for my german friends who visited my hometown, Taiwan. When I made a travel guide, I found there\n' +
            '    no website existing for Taiwan sightseeing in German. TW traveler is a website, which users can find their travel\n' +
            '    destination easily with filtering the geo location or another features. It can switch to map view to quick see the\n' +
            '    travel place.<br>\n' +
            '    This website is made with Nuxt/Vue as front-end and Drupal JSON Api as backend.</p>'
    },
    {
        id: 4,
        title: 'Interior Design Tool',
        imgUrl: 'assets/img/projects/interior.gif',
        content: '<p>Interior design with Google VR SDK. Users can walk through the house and change materials and textures of the\n' +
            '    furniture. It is a quick way for previz of interior design. This app is made with Unity engine.</p>'
    },
    {
        id: 5,
        title: 'I am home',
        imgUrl: 'assets/img/projects/smart.jpg',
        content: '<p>I am home is a mini game which I made for my final project in my master studies. This games shows behind the convenience\n' +
            '    and reliance of smart home and ioT device, there is concern of security vulnerabilities and eliminating social and emotional\n' +
            '    connection between the family members. This game is made with Unity engine.</p>'
    }
];
$(document).ready(function () {

    var touchArea = document.getElementById('tapArea');
    var tapRegion = new ZingTouch.Region(touchArea);
    tapRegion.bind(touchArea, 'tap', function(e){
        $('#projectModal').modal('hide')
    });

    $('#projectModal').on('show.bs.modal', function (event) {
        var card = $(event.relatedTarget);
        var index = card.data('index');
        var modal = $(this);
        modal.find('.modal-body img').attr('src', null);
        var project = projectDataObjects.find(project => project.id === index);
        if (project) {
            modal.find('.modal-title').text(project.title);
            modal.find('.modal-body img').attr('src', project.imgUrl);
            modal.find('.modal-context').html(project.content);
        }
    })
});
