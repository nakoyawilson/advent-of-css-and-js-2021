const codes = document.querySelectorAll(".code");
const verificationForm = document.getElementById("verification-form");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = "";
      setTimeout(() => codes[index + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[index - 1].focus(), 10);
    }
  });
});

navigator.clipboard
  .readText()
  .then((cliptext) => {
    if (cliptext.length === 4 && !isNaN(cliptext)) {
      const numArray = cliptext.split("");
      numArray.forEach((num, index) => {
        codes[index].value = num;
      });
      document.getElementById("verify").focus();
    }
  })
  .catch((error) => {
    console.error(error);
  });

verificationForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
