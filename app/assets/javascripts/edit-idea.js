$(document).ready(function() {
    $('.ideas-list').on('click', '.title', function() {
        var text = $(this).text();
        $(this).html('');
        $(this).attr('id', 'temp-id');
        $('<input></input>')
        .attr({
            'class': 'editing-title',
            'data-id': $(this).parent().attr('id'),
            'size': '30',
            'value': text
        })
        .appendTo('#temp-id');

    $(this).removeClass('title');
    $('#temp-id').select();
    $(this).removeAttr('id', 'temp-id');
    });


    $('.ideas-list').on('click', '.body', function() {
        var text = $(this).text();
        $(this).html('');
        $(this).attr('id', 'temp-id');
        $('<input></input>')
        .attr({
            'class': 'editing-body',
            'data-id': $(this).parent().attr('id'),
            'size': '30',
            'value': text
        })
        .appendTo('#temp-id');

    $(this).removeClass('body');
    $('#temp-id').select();
    $(this).removeAttr('id', 'temp-id');
    });
});
