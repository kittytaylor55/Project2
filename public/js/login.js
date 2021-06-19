//function for log-in functionality with POST '/login' - Jessie
const loginUser = async (event) => {
  event.preventDefault();

  const email = document
    .querySelector(/* enter email input element #id here */)
    .value.trim();

  const password = document
    .querySelector(/* enter password input element #id here */)
    .value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // successful login redirects user to... --> which page????
      document.location.replace(/* insert page route here */);
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document
  .querySelector(/* Log in button element #id */)
  .addEventListener('click', loginUser);
