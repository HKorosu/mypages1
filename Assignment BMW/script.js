document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!this.checkValidity()) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value);
    const bio = document.getElementById('bio').value;
    
    document.getElementById('displayName').innerText = `Họ và tên: ${name}`;
    document.getElementById('displayEmail').innerText = `Email: ${email}`;
    document.getElementById('displayPhone').innerText = `Phone: ${phone}`;
    document.getElementById('displayGender').innerText = `Giới tính: ${gender}`;
    document.getElementById('displayHobbies').innerText = `Sở thích: ${hobbies.join(', ')}`;
    document.getElementById('displayBio').innerText = `Giới thiệu: ${bio}`;
    
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('userInfo').style.display = 'block';
});