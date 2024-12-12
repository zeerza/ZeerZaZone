document.getElementById("buyButton").addEventListener("click", () => {
    fetch('/buy', { method: 'POST' })
        .then(response => {
            if (response.ok) {
                alert('การสั่งซื้อสำเร็จ! ข้อมูลถูกส่งไปที่บอทแล้ว');
            } else {
                alert('เกิดข้อผิดพลาด');
            }
        })
        .catch(err => console.error('Error:', err));
});
