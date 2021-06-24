//function for log-in functionality with POST '/login' - Jessie
const loginUser = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#emailLoginInput').value.trim();

  const password = document.querySelector('#passwordLoginInput').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // successful login redirects user to profile
      document.location.replace('profile');
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document.querySelector('#login-btn').addEventListener('click', loginUser);
