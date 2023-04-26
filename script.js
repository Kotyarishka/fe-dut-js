const form = document.getElementById("interactive-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("interactive-input");

  const value = input.value;
  input.value = "";

  // if input contains a word "hello" then alert "Hello World"
  if (value.includes("hello")) {
    document.body.style.backgroundColor = "#2ecc71";
  } else if (value.includes("world")) {
    document.body.style.backgroundColor = "#3498db";
  } else {
    document.body.style.backgroundColor = "#e74c3c";
  }
});
