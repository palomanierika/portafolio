let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #36374d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #36374d;">Soy diseñadora gráfica y web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();