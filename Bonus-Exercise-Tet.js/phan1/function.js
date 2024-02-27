function laSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let x = 3;
if (laSoNguyenTo(x)) {
    console.log(x + " là số nguyên tố.");
} else {
    console.log(x + " không phải là số nguyên tố.");
}
