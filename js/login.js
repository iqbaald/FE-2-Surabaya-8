      document.addEventListener('DOMContentLoaded', function() {
  // Ambil nilai dari parameter query 'message' pada URL
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');

  // Periksa apakah ada pesan dan masukkan ke elemen HTML
  if (message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
  }
});

const loginUser = async (credentials) => {
  try {
    const response = await fetch('https://lively-cape-toad.cyclic.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    console.log(result);

    return result; // Mengembalikan respons dari server
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

document.getElementById('login-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-pass').value;

  const credentials = {
    username: username,
    password: password
  };

  try {
    const response = await loginUser(credentials);

    // Memeriksa apakah login berhasil berdasarkan respons dari server
    if (response.message === 'Login successful.') {
      console.log('Login successful');
      localStorage.setItem('loginMessage', 'Login successful');
      localStorage.setItem('loggedInUsername', response.username);
  
      // Mengarahkan pengguna ke halaman login-explore.html
      window.location.href = 'login-explore.html';
    } else {
      console.log('Login failed');
      localStorage.setItem('loginMessage', 'Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    localStorage.setItem('loginMessage', 'Error during login');
  }
});
