$(document).ready(function () {

    var $ideas = $('.idea');

    $('#idea_filter').on('keyup', function () {
        filterIdeas(this);
    });

    function filterIdeas(object) {
        var keyword = object.value.toLowerCase();
        $ideas.each(function (index, idea) {
            $idea = $(idea);
            var titleText = $idea.children(".title").text().toLowerCase();
            var bodyText = $idea.children(".body").text().toLowerCase();
            if (titleText.includes(keyword) || bodyText.includes(keyword)) {
                $idea.show();
            } else {
                $idea.hide();
            }
        });
    };
});


