//log out of user function
const logoutUser = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); // redirect user back to home-login
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout-btn').addEventListener('click', logoutUser);
