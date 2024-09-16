function displayAnswer(response){
    console.log("Loading....")
    new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    });
}


function generateRequest(event){
event.preventDefault();

let userInstruction = document.querySelector("#userinput");
let apiKey = "8f100a03dbef7b07767405e3a2t1o8ce";
let prompt = `Generate a Crossfit WOD using ${userInstruction.value}`;
let context =
  "You are a Crossfit training expert and will generate a metcon listed in bullet points. Answer should be short and shown in basic HTML list";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(userInstruction.value)
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiUrl).then(displayAnswer);
}

let theForm = document.querySelector("#form-generator");
theForm.addEventListener("submit", generateRequest);