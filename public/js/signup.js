//function for new user sign up functionality with POST '/signup' - Jessie
const signUpUser = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector(/* enter username input element #id here */)
    .value.trim();

  const email = document
    .querySelector(/* enter email input element #id here */)
    .value.trim();

  const password = document
    .querySelector(/* enter password input element #id here */)
    .value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log(response);
      // successful sign up register redirects user to... --> which page????
      document.location.replace(/* insert page route here */);
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document
  .querySelector(/* sign up button element #id */)
  .addEventListener('click', signUpUser);
