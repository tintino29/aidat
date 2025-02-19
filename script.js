document.getElementById('uyeFormu').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        ad: document.getElementById('ad').value,
        soyad: document.getElementById('soyad').value,
        dogumTarihi: document.getElementById('dogumTarihi').value,
        telefon: document.getElementById('telefon').value,
        tcNo: document.getElementById('tcNo').value
    };

    fetch('/api/kaydet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            alert('Üye kaydedildi!');
        } else {
            alert('Bir hata oluştu.');
        }
    });
});