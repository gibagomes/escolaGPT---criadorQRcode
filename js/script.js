document.getElementById('generate-btn').addEventListener('click', function () {
    const text = document.getElementById('text-input').value;
    if (text.trim() === '') {
        alert('Please enter text or URL');
        return;
    }

    const qrCodeImg = document.getElementById('qr-code-img');
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;

    qrCodeImg.src = apiUrl;
    qrCodeImg.style.display = 'block';
});
