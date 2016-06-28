$(document).ready(function() {
    $('#add-idea').submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.post("/api/v1/ideas", data, function(data) {
            $('#title-input').val('');
            $('#body-input').val('');
            var title = "<h4>" + data.title + "</h4>";
            var body = "<li class='truncate'>" + data.body + "</li>";
            var quality = "<li>" + data.quality + "</li>";


            $('.ideas-list').prepend("<div>" + title + body + quality + "</div>");
        });
    });
});
