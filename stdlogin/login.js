
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var student_id = document.getElementById('student_id').value; // Retrieve the Warden ID
    var password = document.getElementById('password').value; // Retrieve the Password

    var userDatabase = [
        { student_id: 'student1', password: '123456' },
        { student_id: 'student2', password: '789654'}
    ];

    var isAuthenticated = userDatabase.some(function(user) {
        return user.student_id === student_id && user.password === password;
    });

    if (isAuthenticated) {
        window.location.href = "https://rajar12345.github.io/student1/"; // Redirect to the dashboard page
    } else {
        alert('Invalid username or password');
    }
});
