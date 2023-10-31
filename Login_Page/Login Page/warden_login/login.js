
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var warden_id = document.getElementById('warden_id').value; // Retrieve the Warden ID
    var password = document.getElementById('password').value; // Retrieve the Password

    var userDatabase = [
        { warden_id: 'warden1', password: '123456' },
        { warden_id: 'warden2', password: '789654'}
    ];

    var isAuthenticated = userDatabase.some(function(user) {
        return user.warden_id === warden_id && user.password === password;
    });

    if (isAuthenticated) {
        window.location.href = "https://rajar12345.github.io/warden1/"; // Redirect to the dashboard page
    } else {
        alert('Invalid username or password');
    }
});
