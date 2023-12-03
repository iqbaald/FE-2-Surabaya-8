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
    if (response.success) {
      console.log('Login successful');
      localStorage.setItem('loginMessage', 'Login successful');
      localStorage.setItem('loggedInUsername', username);

      // Debugging: Cek URL sebelum perubahan
      console.log('Current URL:', window.location.href);

      // Mengarahkan pengguna ke halaman login-explore.html
      window.location.href = 'login-explore.html';

      // Debugging: Cek URL setelah perubahan
      console.log('New URL:', window.location.href);
    } else {
      console.log('Login failed');
      localStorage.setItem('loginMessage', 'Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    localStorage.setItem('loginMessage', 'Error during login');
  }
});
