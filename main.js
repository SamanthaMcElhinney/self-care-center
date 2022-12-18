var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
]
var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
]
var homeView= document.querySelector('.main-screen')
var buttonAfirmation = document.querySelector('#button1-Affirmation')
var buttonMantra = document.querySelector('#button2-Mantra')
var buttonReceiveMessage= document.querySelector('#receive-message-Butn')
var displayMessage = document.querySelector('.Meditation-box')
var buddhaIcon = document.querySelector('#Buddha')
var randomMantra = mantras[Math.floor(Math.random() * mantras.length)]
var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
var viewFavoriteControls = document.querySelector('.viewfavorites')
var buttonViewFavorites = document.querySelector(".favorites-button")
var heartIcon = document.querySelector('.heart')
var favoriteMessageContainer = document.querySelector('#favorite-message-container')
var favoriteMessageBox = document.querySelector(".favorite-message-box");

var favoriteMessages = [];

buttonReceiveMessage.addEventListener("click", selectReceiveMessage);
heartIcon.addEventListener("click", addToFavorites);
buttonViewFavorites.addEventListener("click", showFavoriteList)

function displayRandomMessage(array) {
  return Math.floor(Math.random() * array.length);
}

function selectReceiveMessage(event){
    event.preventDefault();
    
  if (buttonAfirmation.checked) {
    heartIcon.classList.remove("hidden")
    buttonViewFavorites.classList.remove(".hidden")
    viewFavoriteControls.classList.remove("hidden");
    displayMessage.innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];
     
  } else if (buttonMantra.checked) {
    displayMessage.innerText =
      mantras[Math.floor(Math.random() * mantras.length)];
    viewFavoriteControls.classList.remove("hidden");
  }
}

function addToFavorites(){
    favoriteMessages.push(displayMessage.innerText)
}

function showFavoriteList(){
    homeView.classList.add("hidden")
    favoriteMessageContainer.classList.remove("hidden")
}

function saveFavoritePage(){
  favoriteMessageContainer.innerText =
  for (var i = 0; i <favoriteMessages.length; i++) {
    favoriteMessageContainer.innerText += `favoriteMessages[i]`
  }
}