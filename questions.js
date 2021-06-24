const btn = document.getElementsByName('btn')
btn.onClick = function () {
    var radios = document.getElementsByName('most_important');
    for (var i = 0, length = radio.length; i < length; i++) {
        if (radios[i].checked) {
            alert(radios[i].value)
            break;
        }
    }
};