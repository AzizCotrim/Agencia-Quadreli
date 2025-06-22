$(function () {

    function carregarConteudo(url) {
        var nomeDaSecao = url.split('/')[2];

        $.ajax({
            url: '/Panel/CarregarSessao',
            type: 'GET',
            data: { nomeDaSecao: nomeDaSecao },
            success: function (response) {
                $('#conteudo-dinamico').html(response);
            },
            error: function () {
                alert('Ocorreu um erro!');
            }
        });
    }
    $(".ajax-link").on('click', function (event) {
        event.preventDefault();
        var url = $(this).attr('href');
        carregarConteudo(url);
        return false;
    });

    var urlInicial = '/Panel/Dashboard';
    carregarConteudo(urlInicial)
});
