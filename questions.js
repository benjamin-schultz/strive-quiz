function getradio() {
    var radios = document.getElementsByName('most_important');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById('btn').innerHTML = radios[i].id;
            break;
        }
    }
};