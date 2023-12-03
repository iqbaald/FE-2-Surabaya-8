document.addEventListener("DOMContentLoaded", function () {
    const errorText = document.getElementById('error-message');
  
    document.getElementById('signup-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-pass').value;
      localStorage.setItem('loggedInUsername', username);
      
      const data = {
        username: username,
        password: password
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
  
      // fetch ke endpoint signup
      fetch('https://reqres.in/api/users', requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          window.location.href = 'login-explore.html';
        })
        .catch(error => {
          console.error('Error:', error);
          errorText.textContent = 'Terjadi kesalahan saat melakukan pendaftaran.';
        });
    });
  });

  const storedUsername = localStorage.getItem('loggedInUsername');
  var loggedInUsername = storedUsername;

  function setLoggedInUsername(username) {
    var usernameElement = document.getElementById("username");
    usernameElement.innerHTML = username;
    usernameElement.classList.remove("old-username-class");
    usernameElement.classList.add("new-username-class");
  }

  setLoggedInUsername(loggedInUsername);