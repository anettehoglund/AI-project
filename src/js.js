function generateRequest(event){
event.preventDefault();

new Typewriter("#answer", {
  strings: "Här har du ett svar",
  autoStart: true,
});
}

let theForm = document.querySelector("#form-generator");
theForm.addEventListener("submit", generateRequest);