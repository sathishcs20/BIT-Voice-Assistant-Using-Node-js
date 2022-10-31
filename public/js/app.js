const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const result = document.querySelector('.con');
const box=document.querySelector('.res')
function speak(sentence) 
{
  
    const text_speak = new SpeechSynthesisUtterance(sentence);
    
    
    text_speak.rate = 10;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}
function wishMe() 
  { 
    
    const speech = new SpeechSynthesisUtterance();
    
   
    console.log("hi")
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speech.text="good morning";
    }

    else if(hr == 12) {
        speech.text="good noon";
    }

    else if(hr > 12 && hr <= 17) {
        speech.text="good after noon";
    }

    else {
       speech.text="good evening boss";
    }
    
          
          speech.volume = 1;
          speech.pitch = 1;
          speech.rate = 1;

          window.speechSynthesis.speak(speech)

}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => 
{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}
btn.addEventListener('click', ()=>
{
    wishMe()
    recognition.start();
    
})
function speakThis(message)
{
    const speech = new SpeechSynthesisUtterance();



    if(message.includes('hey') || message.includes('hello')) 
    {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }
    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes('what is your name')) {
        const finalText = "My name is Gwen";
        speech.text = finalText;
    }
  else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
