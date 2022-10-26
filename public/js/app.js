const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const result = document.querySelector('.con');
const box=document.querySelector('.res')
function speak(sentence) 
{
  
    const text_speak = new SpeechSynthesisUtterance(sentence);
    
    
    text_speak.rate = 1;
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
