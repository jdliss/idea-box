$(document).ready(function() {
    $('.ideas-list').on('click', '.title', function() {
        var text = $(this).text();
        var id = $(this).parent().attr('id');
        $(this).html('');
        $(this).attr('id', 'temp-id');
        $('<input></input>')
            .attr({
                'class': 'edit-title editable-title-' + id,
                'data-id': id,
                'value': text,
                'size': '50'
            })
            .appendTo('#temp-id');

        $('.editable-title-' + id).select();
        $(this).removeAttr('id', 'temp-id');
    });

    $('.ideas-list').on('click', '.body', function() {
        var text = $(this).text();
        var id = $(this).parent().attr('id');
        $(this).html('');
        $(this).attr('id', 'temp-id');
        $('<input></input>')
            .attr({
                'class': 'edit-body editable-body-' + id,
                'data-id': id,
                'value': text,
                'size': '50'
                
            })
            .appendTo('#temp-id');

        $('.editable-body-' + id).select();
        $(this).removeAttr('id', 'temp-id');
    });

    $('.ideas-list').on('blur', '.edit-title', function() {
        $.ajax({
            type: "PATCH",
            data: "title=" + $(this).val(),
            url: "/api/v1/ideas/" + $(this).data('id'),
            success: function(result) {
                var id = this.url.split('/').pop();
                var $title = $('#' + id).children('.title');
                $title.html('');
                $title.addClass('title');
                $title.text(this.data.split('title=').pop());
            }
        });
    });

    $('.ideas-list').on('blur', '.edit-body', function() {
        $.ajax({
            type: "PATCH",
            data: "body=" + $(this).val(),
            url: "/api/v1/ideas/" + $(this).data('id'),
            success: function(result) {
                var id = this.url.split('/').pop();
                var $title = $('#' + id).children('.body');
                $title.html('');
                $title.addClass('body');
                $title.text(this.data.split('body=').pop());
            }
        });
    })
});
