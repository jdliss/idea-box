$(document).ready(function() {
    $('.ideas-list').on('click', '.upvote', function() {
        $.ajax({
            url: '/api/v1/upvotes/',
            data: "id=" + this.id.split('-').pop(),
            type: 'POST',
            success: function(result) {
                $('#quality-' + result.id).text(result.quality);
            }
        });
    });
});
