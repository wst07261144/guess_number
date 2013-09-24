function compare_numbers(number1, number2) {
    var m = 0, t = 0, i, j, t;
    for (i = 0; i < 4; i++) {
        if (number1.substring(i, i + 1) == number2.substring(i, i + 1)) m++;
    }
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (number1.substring(i, i + 1) == number2.substring(j, j + 1))  t++;
        }
    }

    n = t - m;
    result = m + 'A' + n + 'B';

    return result;
}
