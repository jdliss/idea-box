$(document).ready(function() {
    $('#add-idea').submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();

        $.post("/api/v1/ideas", data, function(data) {
            $('#title-input').val('');
            $('#body-input').val('');

            var title = "<h4 class='title'>" + data.title + "</h4>";
            var body = "<li class='truncate body'>" + data.body + "</li>";
            var quality = "<li id=quality-" + data.id + ">" + data.quality + "</li><br>";
            var button = "<button id=" + data.id + " class='delete-idea'>delete</button> "
            var up = '<button id="up-' + data.id + '" class="upvote">up</button> ';
            var down = '<button id="down-' + data.id + '" class="downvote">down</button> ';


            $('.ideas-list').prepend(
                "<div class='idea' id='" + data.id + "'>"
                    + title
                    + body
                    + quality
                    + up
                    + down
                    + button
                    + "</div>"
            );

            var newBody = $('#' + data.id).children('.truncate');
            debugger;
            newBody.text(truncateString(newBody.text(), 100));
        });
    });
});
