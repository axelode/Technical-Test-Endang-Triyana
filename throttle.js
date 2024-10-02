function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        } else {
            console.log("Throttle: Fungsi diblokir, menunggu " + (delay - (now - lastCall)) + " ms.");
        }
    };
}

function logMessage(message) {
    console.log(`Fungsi dijalankan: ${message} pada ${new Date().toLocaleTimeString()}`);
}

const throttledLog = throttle(logMessage, 3000);

setInterval(() => {
    throttledLog("Pesan ini ditampilkan setiap 3 detik.");
}, 300);
