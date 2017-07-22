function go(url) {
    window.location.href = url;
}

$(function () {
    var s = $("#sticker");
    if (s) {
        s.sticky({topSpacing: 0});
    }

});