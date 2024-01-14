document.addEventListener("DOMContentLoaded", function () {
    const errorText = document.getElementById('error-message');
  
    document.getElementById('signup-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('sign-username').value;
      const email = document.getElementById('sign-email').value;
      const password = document.getElementById('sign-pass').value;
      localStorage.setItem('loggedInUsername', username);
      
      const data = {
        username: username,
        email: email,
        password: password
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      };
  
      // fetch ke endpoint signup
      fetch('https://lively-cape-toad.cyclic.app/register', requestOptions)
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
    var usernameElement2 = document.getElementById("username2");
    var usernameElement3 = document.getElementById("username3");
    usernameElement.innerHTML = username;
    usernameElement2.innerHTML = username;
    usernameElement3.innerHTML = username;
    usernameElement.classList.remove("old-username-class");
    usernameElement.classList.add("new-username-class");
  }

  setLoggedInUsername(loggedInUsername);