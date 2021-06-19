//log out of user function
const logoutUser = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login'); // redirect user back to login screen?
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(/* log out button element #id */)
  .addEventListener('click', logoutUser);
