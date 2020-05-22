$(function () {
    if (window.location.pathname === '/IconLib/' || window.location.pathname === '/IconLib/index.html') {
        fetch("https://jhalanyeh.github.io/IconLib/init.json")
            .then(response => response.json())
            .then(json => {
                keys = Object.keys(json);
                for (var i = 0; i < keys.length; i++) {
                    $(`.${keys[i]}`).text(json[keys[i]]);
                }
            });
    }
});