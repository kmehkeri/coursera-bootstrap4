$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $('#my-carousel').carousel({ interval: 2000 });
    $('#carousel-pause').click(function() {
        $('#my-carousel').carousel('pause');
    });
    $('#carousel-play').click(function() {
        $('#my-carousel').carousel('cycle');
    });
});
