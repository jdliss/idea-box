$(document).ready(function() {
    $('.truncate').each(function(i, obj) {
        obj.innerHTML = truncateString(obj.innerHTML, 100);
    });
});

function truncateString(str, length) {
    return str.length > length ? str.substring(0, length - 3) + '...' : str
}
