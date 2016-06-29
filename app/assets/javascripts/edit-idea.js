$(document).ready(function() {
    $('.ideas-list').on('click', '.title', function() {
        makeEditable('edit-title', 'editable-title-', $(this));
    });

    $('.ideas-list').on('click', '.body', function() {
        makeEditable('edit-body', 'editable-body-', $(this));
    });

    $('.ideas-list').on('blur', '.edit-title', function() {
        sendEdit('title', $(this));
    });

    $('.ideas-list').on('blur', '.edit-body', function() {
        sendEdit('body', $(this));
    })

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

    function sendEdit(fieldName, object) {
        $.ajax({
            type: "PATCH",
            data: fieldName + "=" + object.val(),
            url: "/api/v1/ideas/" + object.data('id'),
            success: function() {
                successFunc(fieldName, this);
            }
        });
    };

    function successFunc(fieldName, obj) {
        var id = obj.url.split('/').pop();
        var $title = $('#' + id).children('.' + fieldName);
        $title.html('');
        $title.addClass(fieldName);
        $title.text(obj.data.split(fieldName + '=').pop());
    }
});
