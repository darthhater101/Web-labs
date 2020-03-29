
onmessage = function (e) {
    can_add = true;
    console.log(e.data);
    for (var i = 0; i < e.data.length; i++) {
        for (var j = 0; j < e.data.length; j++) {
            if (i == j) continue;
            if (e.data[i].login == e.data[j].login) {
                can_add = false;
            }
        }
    }
    this.postMessage(can_add);
}