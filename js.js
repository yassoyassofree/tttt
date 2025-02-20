function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example of checking password (change 'password123' to your desired password)
    const correctPassword = 'password123';

    if (password === correctPassword) {
        // Redirect to another HTML page if the password is correct
        window.location.href = 'welcome.html'; // Change 'welcome.html' to your desired page
    } else {
        alert('Incorrect password. Please try again.');
    }
}
if (allowedUsernames.includes(username)) { // Check if the username is allowed
    if (!users.some(user => user.username === username)) { // Ensure username is unique
        users.push({ username: username, password: password }); // Add user to the array
        usernameInput.value = ''; // Clear the username input
        passwordInput.value = ''; // Clear the password input

        // Display the user in the list
        const list = document.getElementById('userList');
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${username}, Password: ${password}`;
        list.appendChild(listItem);
    } else {
        alert("Username already added.");
    }
} else {
    alert("This username is not allowed.");
}