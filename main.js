// Global/Data Model
var currentStory;
var savedStories = [];

// User text inputs
var userNoun1 = document.getElementById('noun1');
var userPlace = document.getElementById('place1');
var userNumber = document.getElementById('num1');
var userNoun2 = document.getElementById('noun2');
var userVerb = document.getElementById('verb1');
var userClothing1 = document.getElementById('clothing1');
var userClothing2 = document.getElementById('clothing2');
var userBeverage = document.getElementById('beverage1');
var userFood = document.getElementById('food1');
var dropDown = document.getElementById('story-dropdown');

// Story text elements
var noun1 = document.getElementById('noun1Text');
var place = document.getElementById('place1Text');
var number = document.getElementById('num1Text');
var noun2 = document.getElementById('noun2Text');
var verb = document.getElementById('verb1Text');
var clothing1 = document.getElementById('clothing1Text');
var clothing2 = document.getElementById('clothing2Text');
var beverage = document.getElementById('beverage1Text');
var food = document.getElementById('food1Text');

// Buttons
var writeButton = document.getElementById('write-button');
var writeAnotherButton = document.getElementById('write-another');
var viewSavedButton = document.getElementById('view-saved');
var saveStoryButton = document.getElementById('save-story');

// Sections
var story = document.querySelector('.story');
var form = document.querySelector('.form');
var storyText = document.getElementById('story-text');
var savedView = document.querySelector('.saved-stories');

// Event Listeners
form.addEventListener('submit', function() {
    viewStory();
    submitStory();
});
writeAnotherButton.addEventListener('click', viewForm);
viewSavedButton.addEventListener('click', viewSaved);
saveStoryButton.addEventListener('click', saveUserStory);


// Functions
function viewStory() {
    story.classList.remove('hidden');
    form.classList.add('hidden');
    viewSavedButton.classList.remove('hidden')
}

function viewForm() {
    story.classList.add('hidden');
    form.classList.remove('hidden');
    savedView.classList.add('hidden');
    viewSavedButton.classList.remove('hidden');
    writeAnotherButton.classList.add('hidden');
}

function viewSaved() {
    story.classList.add('hidden');
    form.classList.add('hidden');
    savedView.classList.remove('hidden');
    viewSavedButton.classList.add('hidden')
    writeAnotherButton.classList.remove('hidden');
}

function submitStory() {
    event.preventDefault();
    dropDown.value === 'storyA' ? writeStoryA() : writeStoryB();
    resetForm();
}

function resetForm() {
    userNoun1.value = "";
    userPlace.value = "";
    userNumber.value = "";
    userNoun2.value = "";
    userVerb.value = "";
    userClothing1.value = "";
    userClothing2.value = "";
    userBeverage.value = "";
    userFood.value = "";
}

function writeStoryA() {
    currentStory = `
    So much ${userNoun1.value} fell from the ${userPlace.value} last night! There are ${userNumber.value} inches of snow on the ground, so we went outside to build ${userNoun2.value} men and go ${userVerb.value} down a big hill. First, we had to put on warm ${userClothing1.value} and ${userClothing2.value}. After we were done, we went home to have hot ${userBeverage.value} and ${userFood.value} to warm up.
    `
    pushStory();
}

function writeStoryB() {
    currentStory = `
    One time, when I was in ${userPlace.value}, I had just drank a ${userBeverage.value} when I saw a ${userNoun1.value} dressed as a ${userNoun2.value} wearing a ${userClothing2.value}! At first I couldn't believe my eyes, so I started ${userVerb.value} my ${userClothing1.value} out of confusion. After doing that for ${userNumber.value} minutes, I realized that I had accidentally eaten a weed-${userFood.value} and was hallucinating.
    `
    pushStory();
}

function pushStory() {
    storyText.innerText = currentStory;
}

function saveUserStory() {
   savedView.innerHTML += `<div class = "saved-card">${currentStory}</div>`;
}