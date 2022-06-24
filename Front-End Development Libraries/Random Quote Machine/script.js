$(document).ready(function() {
  
  $('button').click(function() {
    $('#quote-here').html(randomQuote());
    $('#tweet-button').empty();
    createButton();
  });

  // Twitter Button
  function createButton() {

  var elem = document.getElementById('twitterbutton');
   if(elem != null){   elem.parentNode.removeChild(elem);}
      

    var link = document.createElement('a');
    
    link.setAttribute('class', 'twitter-share-button');
    link.setAttribute('id', 'twitterbutton');
    link.setAttribute("data-text", "" + theQuote + "");
    link.setAttribute("data-size", "large");

    tweetdiv = document.getElementById('tweet-button');
    tweetdiv.appendChild(link);
    
    twttr.widgets.load();

  }
});


var quotesArr = [
  "Just do it - Nike", 
  "Place your iron hand inside a velvet glove - Napoleon", 
  "Any man who tries to be good all the time is bound to come to ruin among the great number who are not good - niccolo Machiavelli", 
  "Don't make a girl a promise... if you know you can't keep it - Cortana", 
  "Not by speeches and votes of the majority are the great questions of the time decided, but by iron and blood - Otto Von Bismarck", 
  "Somewhere, something incredible is waiting to be known - Carl Sagan", 
  "Misdirection. what the eyes see and the ears hear, the mind believes - Gabriel Shear", 
  "The only true wisdom is in knowing you know nothing - Socrates", 
  "War is peace. freedom is slavery. ignorance is strength - George Orwell", 
  "All animals are equal, but some animals are more equal than others - George Orwell", 
  "This is your life and its ending one moment at a time - Chuck palahniuk", 
  "It's only after we've lost everything that we're free to do anything - Chuck Palahniuk", 
  "The problem with quotes found on the internet is that they are often not true - Abraham Lincoln", 
  "Know thy self, know thy enemy. a thousand battles, a thousand victories - Sun Tzu", 
  "That is not dead which can eternal lie, and with strange aeons even death may die - H.P Lovecraft", 
  "Good night, good luck - Dying Light", 
  "In the beginning, there was man. and for a time, it was good. but humanity's so-called civil societies soon fell victim to vanity and corruption. then man made the machine in his own likeness. thus did man become the architect of his own demise. - Zion Archive Computer", 
  "Software is eating the world, the web is eating software, and javascript rules the web. - Eric Elliott", 
  "There's no talent here, this is hard work, this is an obsession. talent does not exist, we are all equals as human beings. you could be anyone if you put in the time. you will reach the top, and that's that. I am not talented, I am obsessed. - Conor McGregor", 
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live ― John Woods", 
  "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user. - Bill Gates",
  "Curiosity is the engine of achievement - Ken Robinson",
  "Coding is the language of the future, and every girl should learn it. As I've learned from watching girls grow and learn in our classrooms, coding is fun, collaborative and creative - Reshma Saujani",

];
var randomVal = -1;
var oldVal = -1;
var theQuote = "no quote here yet";

function randomQuote() {
  while (randomVal === oldVal) {
    randomVal = Math.floor(Math.random() * (quotesArr.length - 0) + 0);
  }

  oldVal = randomVal;
  theQuote = quotesArr[randomVal];
  return quotesArr[randomVal];

}