$(function () {
    $(".ajax-link").on('click', function (event) {
        event.preventDefault();
        alert("ai");
        var url = $(this).attr('href');
    });
});
