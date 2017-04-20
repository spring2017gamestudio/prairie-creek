function selectSpirit(site) {
    var sum = 0;
    for (var i = 0; i < site.responses.length; i++) {
        if (site.responses[i].selected) {
            sum += site.responses[i].value;
        }
    }
    var type = (sum < 0) ? 'artificial' : 'natural';
    return _select(type, site);
}

function _select(type, site) {
    return {
        image: 'images/spirits/' + site.shortname + '-' + type + '.png',
        text: (type==='artificial') ? site.artificial : site.natural
    };
}