const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, { e: 5 }]
    }
};

function deepClone(obj) {
    // Jika nilai adalah null atau bukan objek, langsung kembalikan nilainya
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Buat array atau objek baru untuk menyimpan salinan
    const clone = Array.isArray(obj) ? [] : {};

    // Salin properti satu per satu
    for (let key in obj) {
        // Hanya salin properti yang benar-benar dimiliki objek
        if (obj.hasOwnProperty(key)) {
            // Rekursi: jika properti adalah objek atau array, clone secara mendalam
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

const cloned = deepClone(original);
cloned.b.d[2].e = 6; // Ubah salah satu nilai di salinan

console.log(original.b.d[2].e); // Output: 5 (tidak berubah karena deep clone)
console.log(cloned.b.d[2].e);   // Output: 6 (salinan berubah)
