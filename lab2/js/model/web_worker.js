
onmessage = function(e) {
    var can_add = true;
    for(var i = 0; i < e.data[0].length - 1; i++) {
        for(var j = i + 1; j < e.data[0].length; j++) {
            if(e.data[0][i].login == e.data[0][j].login) can_add = false;
        }
    }
    this.postMessage(can_add);
}