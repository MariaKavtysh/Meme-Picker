import { catsData } from '/data.js';

// saving page elements to const
const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-img-btn');
const gifsOnly = document.getElementById('gifs-only-option');

emotionRadios.addEventListener('change', highlightCheckedOption);

memeModalCloseBtn.addEventListener('click', closeModal);

getImageBtn.addEventListener('click', renderCat);

// highlighting selected option
function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio');
  for (let radio of radios) {
    radio.classList.remove('highlight');
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function closeModal() {}

function renderCat() {
  // uses cat object, returned by getSingleCatObject to create HTML string and render it
}

function getSingleCatObject() {
  // returns a single object, selected from the array returned by getMatchingCatsArray
}

// returns array of cat objects matching users criteria
function getMatchingCatsArray() {
  const isGif = gifsOnly.checked;

  const selectedEmotion = document.querySelector(
    'input[type="radio"]:checked'
  )?.value;

  const matchingCatsArray = catsData.filter(function (cat) {
    if (isGif) return cat.emotionTags.includes(selectedEmotion) && cat.isGif;

    return cat.emotionTags.includes(selectedEmotion);
  });
  console.log(matchingCatsArray);
  return matchingCatsArray;
}

// taking out emotions from the original array into a new array
function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

// rendering out the emotions options on the page
function renderEmotionsRadios(cats) {
  let radioItems = '';
  const emotions = getEmotionsArray(cats);

  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
          <label for="${emotion}">${emotion}</label>
          <input
           type="radio"
           id="${emotion}"
           value="${emotion}"
           name="emotions">
        </div>`;
  }
  emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData);
