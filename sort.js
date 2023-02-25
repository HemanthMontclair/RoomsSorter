function sortRooms() {
    var roomInput = document.getElementById("roomInput").value;
    var roomArray = roomInput.split(", ");
    var nkLArray = [];
    var nkMArray = [];
    var nkBArray = [];
    var nddLArray = [];
    var nddMArray = [];
    var nddBArray = [];

    for (var i = 0; i < roomArray.length; i++) {
        var roomNumber = parseInt(roomArray[i]);
        if (isNaN(roomNumber)) {
            continue;
        } else if (roomNumber == 115 || roomNumber == 117 || roomNumber == 119 || roomNumber == 120 || roomNumber == 122 || roomNumber == 222 || roomNumber == 228) {
            nkLArray.push(roomNumber);
        } else if (roomNumber == 102 || roomNumber == 104 || roomNumber == 105 || roomNumber == 106 || roomNumber == 110 || roomNumber == 112 || roomNumber == 127 || roomNumber == 139 || roomNumber == 201 || roomNumber == 210 || roomNumber == 220 || roomNumber == 236 || roomNumber == 239 || roomNumber == 243) {
            nkMArray.push(roomNumber);
        } else if (roomNumber == 108 || roomNumber == 205 || roomNumber == 206 || roomNumber == 208 || roomNumber == 212 || roomNumber == 223 || roomNumber == 226 || roomNumber == 227 || roomNumber == 229 || roomNumber == 230) {
            nkBArray.push(roomNumber);
        } else if (roomNumber == 109 || roomNumber == 111 || roomNumber == 114 || roomNumber == 116 || roomNumber == 118 || roomNumber == 121 || roomNumber == 129 || roomNumber == 131 || roomNumber == 132 || roomNumber == 134 || roomNumber == 209 || roomNumber == 211 || roomNumber == 214 || roomNumber == 215 || roomNumber == 216 || roomNumber == 217 || roomNumber == 218
