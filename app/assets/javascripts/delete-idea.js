$(document).ready(function() {
    $('.ideas-list').on('click', '.delete-idea', function() {
        $.ajax({
            url: '/api/v1/ideas/' + this.id,
            type: 'DELETE',
            success: function(result) {
                $('div#' + this.url.split('/').pop()).remove();
            }
        });
    });
});
