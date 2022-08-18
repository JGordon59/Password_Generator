var generate_button = document.getElementById('generate-btn');

// Random length
// Random characters
//  - Random special characters
//  - Random numbers
//  - Random alphabetical numbers (A - z)
//    - Random capitalization

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()-=+_~`";
var number = "0123456789";

var types = {
  alphabetical: 1,
  special: 2,
  number: 3,
  alphabeticalUppercase: 4
}

function random_interval(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

function generate_password() {
  var password_area = document.getElementById('password');
  var password = "";

  var length = random_interval(8, 128); // 50

  console.log(length); // 50

  for (var i = 0; i < length; i++) {
    var type = random_interval(1, 4);

    if (type == types.alphabetical) {
      var random_index = random_interval(0, alphabet.length - 1);
      password += alphabet[random_index];
    }

    if (type == types.special) {
      var random_index = random_interval(0, special.length - 1);
      password += special[random_index];
    }

    if (type == types.number) {
      var random_index = random_interval(0, number.length - 1);
      password += number[random_index];
    }

    if (type == types.alphabeticalUppercase) {
      var random_index = random_interval(0, alphabetUppercase.length - 1);
      password += alphabetUppercase[random_index];
    }
  }

  password_area.innerHTML = password;
}

// Register CLICK event listener.
// After this event listener is registered, the passed function (generate_password) will be called
// anytime the button is clicked.

generate_button.addEventListener("click", generate_password);
