$(function () {
    if (window.location.pathname === '/IconLib/') {
        fetch("https://jhalanyeh.github.io/IconLib/fileCount.json")
            .then(response => response.json())
            .then(json => {
                keys = Object.keys(json);
                for (var i = 0; i < keys.length; i++) {
                    $(`.${keys[i]}`).text(json[keys[i]]);
                }
            });
    }
});