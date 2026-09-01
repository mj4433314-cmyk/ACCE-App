document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const passwordToggles = document.querySelectorAll('.password-toggle');
    const backBtn = document.querySelector('.back-btn');
    
    // Back button functionality
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.history.back();
        });
    }
    
    // Password toggle functionality
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '👁‍🗨';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const captcha = document.getElementById('captcha').value;
            const inviteCode = document.getElementById('inviteCode').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!phone || !password || !confirmPassword || !captcha || !inviteCode) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('كلمات المرور غير متطابقة');
                return;
            }
            
            if (password.length < 6) {
                alert('يجب أن تكون كلمة المرور 6 أحرف على الأقل');
                return;
            }
            
            if (!terms) {
                alert('يجب أن توافق على شروط الخدمة');
                return;
            }
            
            // Success message
            alert('تم التسجيل بنجاح!');
            // Redirect to index
            window.location.href = 'index.html';
        });
    }
});
