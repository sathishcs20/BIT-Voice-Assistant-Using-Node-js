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
  else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
else if(message.includes('what is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
 else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
  else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text= finalText;
    }
   else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }
  else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
else if(message.includes("chair man") || message.includes("chairman"))
    {
      const finalText = "chair man of bannari amman institute of technology is mister bala subramaniyam";
        speech.text = finalText;
    }
  else if(message.includes('data science') && (message.includes('incharge') || message.includes("in charge")))
    {
    
      fetch('http://localhost:3000/search',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(
          {
            lab:"data science",
            role:"incharge"
          }
        )
        }).then((data)=>
      {
        data.json().then((res)=>
        {
          const result =res[0].name
          const finalText = "Incharge of Data Science lab is "+result;
          speech.text = finalText;
          speech.volume = 1;
          speech.pitch = 1;
          speech.rate = 1;

          window.speechSynthesis.speak(speech)
          
        })
      })

    }
  else if((message.includes("computer science") || message.includes("computer technology")) && message.includes('details'))
    {
        if(message.includes('computer science'))
        {
        
            message=message.replace("details about","")
            message=message.replace("computer science department","")
            message =message.trim()
          fetch('http://localhost:3000/details',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(
          {
            department:"computer science",
            name:message
          }
        )
              }).then((data)=>
      {
        data.json().then((res)=>
        {
          
          const finalText = res[0].name+" "+res[0].role+"  has a  "+res[0].exprerience+"  years of experience at Bannari Amman institute of technology"+"  his contact details is"   +res[0].contactdetails+"    He is expert in   "+res[0].expert
          console.log(finalText)
          speech.text = finalText;
          speech.volume = 1;
          speech.pitch = 1;
          speech.rate = 1;
          box.style.width = '800px';
          box.style.height = '200px';
          result.innerText=finalText
  
          window.speechSynthesis.speak(speech)
          
        })
      })
           else if(message.includes("computer technology"))
        {
            message=message.replace("details about","")
            message=message.replace("computer technology department","")
            message =message.trim()
            fetch('http://localhost:3000/details',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
               body:JSON.stringify(
          {
            department:"computer technology",
            name:message
          }
        )
       }).then((data)=>
      {
        data.json().then((res)=>
        {
          
          const finalText = res[0].name+" "+res[0].role+"  has a  "+res[0].exprerience+"  years of experience at Bannari Amman institute of technology"+"  his contact details is"   +res[0].contactdetails+"    He is expert in   "+res[0].expert
          console.log(finalText)
          speech.text = finalText;
          speech.volume = 1;
          speech.pitch = 1;
          speech.rate = 1;
          box.style.width = '800px';
          box.style.height = '200px';
          result.innerText=finalText
          window.speechSynthesis.speak(speech)
          
        })
      })
        }
    }
      else
    {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }
       speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
