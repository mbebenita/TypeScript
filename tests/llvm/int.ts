class Point {
    x: signed;
    y: signed;
}

function calculateSum(count) {
    var p = new Point();
    p.x = 1;
    var sum: signed = 0;
    for (var i = 0; i < 1000; i++) {
        sum = sum + i | 0;
    }
    return sum;
}