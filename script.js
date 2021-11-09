var heading;
var executeButton;
var outputParagraph;
var inputElement;

var games = ["Minecraft", "Pokemon", "Digimon", "Halo", "Chess"];
var consoles = ["PlayStation", "XBox", "PC", "Nintendo DS", "GameBoy", "PS Vita"];
var time = ["enjoy yourself", "thoroughly enjoy yourself", "come out of it a totally different person", "have an okayish experience", "have the greatest time of your life", "immediately desire a refund", "not have fun at all"];

// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener('mousemove', mouseMovedFunc);

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateGames();
  });

  document.addEventListener("mousemove", function(event) {
    mouseMovedFunc(event);
  })

});

function generateGames()
{

  var currentInputText = inputElement.value;

  var randomGameIndex = Math.floor(Math.random()*games.length);
  var randomConsoleIndex = Math.floor(Math.random()*consoles.length);
  var randomTimeIndex = Math.floor(Math.random()*time.length);
  if(currentInputText == "")
  {
    outputParagraph.innerText = "Enter your name!";
  }
  else
  {
    outputParagraph.innerText = currentInputText + ", today you should play " + games[randomGameIndex] + " for the " + consoles[randomConsoleIndex] + " and " + time[randomTimeIndex] + "!";
  }


}
