function selectSpirit(site) {
    var sum = 0;
    for (var i = 0; i < site.responses.length; i++) {
        if (site.responses[i].selected) {
            sum += site.responses[i].value;
        }
    }
    var type = (sum < 0) ? 'artificial' : 'natural';
    return {
        image: site.shortname + '-' + type + '.png',
        text: (sum < 0) ? site.artificial : site.natural
    };
}