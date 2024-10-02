const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, { e: 5 }]
    }
};

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

const cloned = deepClone(original);
cloned.b.d[2].e = 6;

console.log(original.b.d[2].e);
console.log(cloned.b.d[2].e);
