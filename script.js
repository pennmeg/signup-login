function transformSignUp() {
  console.log("Show Sign Up");
  var moveText = document.getElementById('img--form');
  moveText.classList.add('move');
};

function transformSignIn() {
  console.log("Show Sign In");
  var moveText = document.getElementById('img--form');
  moveText.classList.remove('move');
};

function openModal() {
  console.log("Click the Sign In/Sign Up");
  var modal = document.getElementById('modal');
  modal.style.display = 'flex';
};

function closeModal() {
  console.log("Close the modal");
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
};
