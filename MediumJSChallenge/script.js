var name = prompt("What is your name?");

if (name.toUpperCase() == name) {
  console.log('shouting');
}
else if (name.toLowerCase() == name) {
    console.log('whispering');
}
else {
  console.log('talking normally');
}