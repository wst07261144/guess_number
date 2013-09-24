function get_random_number() {
    var temp1, temp2, temp3, temp4, temp;
    temp1 = Math.floor(Math.random() * 10);
    temp2 = Math.floor(Math.random() * 10);
    while (temp2 == temp1) {
        temp2 = Math.floor(Math.random() * 10);
    }
    temp3 = Math.floor(Math.random() * 10);
    while (temp3 == temp2 || temp3 == temp1) {
        temp3 = Math.floor(Math.random() * 10);
    }
    temp4 = Math.floor(Math.random() * 10);
    while (temp4 == temp3 || temp4 == temp2 || temp4 == temp1) {
        temp4 = Math.floor(Math.random() * 10);
    }
    temp1 = temp1.toString();
    temp2 = temp2.toString();
    temp3 = temp3.toString();
    temp4 = temp4.toString();
    temp = temp1 + temp2 + temp3 + temp4;
    return temp;
}
