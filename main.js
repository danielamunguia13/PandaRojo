document.addEventListener("DOMContentLoaded", function() {
  let app = document.getElementById('typewriter');

  let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString('<span style="color:#8F391E">Pandas Rojos (Ailurus Fulgens).</span>')
    .pauseFor(200)
    .deleteChars(10)
    .start();
});

function toggleContent() {
  var imageContainer = document.getElementById("imageContainer");
  var toggleButton = document.getElementById("toggleButton");

  if (imageContainer.style.display === "none") {
    imageContainer.style.display = "block";
    toggleButton.textContent = "CLICK TO HIDE";
  } else {
    imageContainer.style.display = "none";
    toggleButton.textContent = "CLICK TO SEE MORE!";
  }
}

// Ocultar el contenido al principio
document.addEventListener("DOMContentLoaded", function() {
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.style.display = "none";
});
