document.addEventListener("DOMContentLoaded", function () {
    const errorText = document.getElementById('error-message');
  
    document.getElementById('signup-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('sign-username').value;
      const email = document.getElementById('sign-email').value;
      const password = document.getElementById('sign-pass').value;
  
      const data = {
        first_name: username,
        email: email,
        last_name: password
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
  
      //Lakukan fetch ke endpoint signup
      fetch('https://reqres.in/api/users', requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          window.location.href = 'explore.html';
        })
        .catch(error => {
          console.error('Error:', error);
          errorText.textContent = 'Terjadi kesalahan saat melakukan pendaftaran.';
        });
    });
  });