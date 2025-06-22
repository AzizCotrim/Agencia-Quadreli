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
    $(".ajax-link").on('click', function () {
        var url = $(this).attr('href');
        carregarConteudo(url);
    });

    var urlInicial = '/Panel/Dashboard';
    carregarConteudo(urlInicial);

    $('#conteudos').on('click', function () {
        $('.conteudos').toggleClass('open-menu');
    });

    $('#configuracoes').on('click', function () {
        $('.configuracoes').toggleClass('open-menu');
    });
});
