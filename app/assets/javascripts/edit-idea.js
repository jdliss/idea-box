$(document).ready(function() {
    $('.ideas-list').on('click', '.title', function() {
        var text = $(this).text();
        $(this).html('');
        $(this).attr('id', 'temp-id');
        $('<input></input>')
            .attr({
                'data-id': $(this).parent().attr('id'),
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
                'data-id': $(this).parent().attr('id'),
                'value': text
            })
            .appendTo('#temp-id');

        $(this).removeClass('body');
        $('#temp-id').select();
        $(this).removeAttr('id', 'temp-id');
    });

    $('.ideas-list').on('blur', '.body', function() {
        debugger;
    })

    $('.ideas-list').on('blur', '.title', function() {
        debugger;
    })
});
