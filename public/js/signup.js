//function for new user sign up functionality with POST '/signup' - Jessie
const signUpUser = async (event) => {
  event.preventDefault();

  const age = document.querySelector('#ageInput').value.trim();

  const weight = document.querySelector('#weightInput').value.trim();

  const height = document.querySelector('#heightInput').value.trim();

  const email = document.querySelector('#emailSignupInput').value.trim();

  const password = document.querySelector('#pwSignupInput').value.trim();

  if (age && weight && height && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log(response);
      // successful sign up register redirects user to profile
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document.querySelector('#signup-btn').addEventListener('click', signUpUser);
