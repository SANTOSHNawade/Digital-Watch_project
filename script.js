function updateTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('digital-watch').textContent = `[${hours}:${minutes}:${seconds}]`;
}

setInterval(updateTime, 1000);
updateTime();  // Initial call to prevent delay
