$(document).ready(function() {
    $('.ideas-list').on('click', '.title', function() {
        makeEditable('edit-title', 'editable-title-', $(this));
    });

    $('.ideas-list').on('click', '.body', function() {
        makeEditable('edit-body', 'editable-body-', $(this));
    });

    function makeEditable(class1, class2, object) {
        var text = object.text();
        var id = object.parent().attr('id');
        object.html('');
        object.attr('id', 'temp-id');
        $('<input></input>')
            .attr({
                'class': class1 + " " + class2 + id,
                'data-id': id,
                'value': text,
                'size': '50'
                
            })
            .appendTo('#temp-id');

        $('.' + class2 + id).select();
        object.removeAttr('id', 'temp-id');
    };

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
