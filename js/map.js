document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.adress-btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.map-position').forEach(function(tabContent) {
                tabContent.classList.remove('map-active')
            })
            document.querySelector(`[data-target='${path}']`).classList.add('map-active')
        })
    })
})

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("mapFirst", {
        center: [55.75846306898368,37.601079499999905],
        zoom: 15
    }); 
    
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address class="adres-map">',
            'м.<strong>Аэропорт</strong>',
            '<br/>',
            'Ленинградский проспект, д. 66',
            '<br/>',
            '</address>',
            '<ul class="list-reset map-list">',
            '<li>Пн: 8:00 - 19:00</li>',
            '<li>Вт: 8:00 - 19:00</li>',
            '<li>Ср: 8:00 - 19:00</li>',
            '<li>Чт: 8:00 - 19:00</li>',
            '<li>Пт: 8:00 - 19:00</li>',
            '<li>Сб: 9:30 - 17:00</li>',
            '<li>Вс: 9:30 - 17:00</li>',
            '</ul>',
            '<div class="btn-map-pos">',
            '<a class="map-btn" target="_blank" href="https://www.cmd-online.ru/meditsinskie-uslugi/vrachi/?time=Любая+дата&set_filter=y&arrDoctorList_62=4283388740">Записаться на приём</a>',
            '</div>',
        ].join('')
        
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map_marker_blue.svg',
        iconImageSize: [60, 60],
    });
    
      myMap.geoObjects.add(myPlacemark)
}

$('.adress-btn').click(function(){
    $(this).toggleClass('btn-active');
    $('.adress-btn').not(this).removeClass('btn-active');
})
