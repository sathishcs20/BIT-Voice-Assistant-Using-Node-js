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
