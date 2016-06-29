$(document).ready(function () {

    var $ideas = $('.idea');

    $('#idea_filter_title').on('keyup', function () {
        filterIdeas(".title", this);
    });

    $('#idea_filter_body').on('keyup', function () {
        filterIdeas(".body", this);
    });

    function filterIdeas(_class, object) {
        var keyword = object.value;
        $ideas.each(function (index, idea) {
            $idea = $(idea);
            if ($idea.children(_class).text().toLowerCase().includes(keyword.toLowerCase())) {
                $idea.show();
            } else {
                $idea.hide();
            }
        });
    };
});


