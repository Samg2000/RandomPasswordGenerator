function generate() {
  var textBox = document.getElementById("password");
  var length = document.getElementById("length");
  var charset =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+{}:><?|";
    // console.log(length.value);
    // console.log(isNaN(length.value))
    var pass="";
  if (!isNaN(length.value)){
      for (let i = 0; i < length.value; i++) {
          pass=pass+charset.charAt(Math.floor(Math.random()*82));
      }
      textBox.value=pass;
  }
  else alert("Enter Valid Length");
}
