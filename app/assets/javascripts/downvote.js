$(document).ready(function() {
    $('.ideas-list').on('click', '.downvote', function() {
        $.ajax({
            url: '/api/v1/downvotes/',
            data: "id=" + this.id.split('-').pop(),
            type: 'POST',
            success: function(result) {
                $('#quality-' + result.id).text(result.quality);
            }
        });
    });
});
