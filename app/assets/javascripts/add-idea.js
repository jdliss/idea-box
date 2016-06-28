$(document).ready(function() {
    $('#add-idea').submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.post("/api/v1/ideas", data, function() {
            var titleVal = $('#title-input').val();
            var bodyVal = $('#body-input').val();
            $('#title-input').val('');
            $('#body-input').val('');
            var title = "<h4><%= idea.title %></h4>";
            var body = "<li class='truncate'>" + titleVal + "</li>";
            var quality = "<li>" + bodyVal + "</li>";


            $('.ideas').prepend("<div>" + title + body + quality + "</div>");
        });
    });
});
