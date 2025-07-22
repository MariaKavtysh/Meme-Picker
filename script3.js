import { catsData } from './data.js';

// Selecting elements
const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-img-btn');
const gifsOnlyOption = document.getElementById('gifs-only-option');
const memeModal = document.getElementById('meme-modal');
const memeModalInner = document.getElementById('meme-modal-inner');
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn');

emotionRadios.addEventListener('change', highlightCheckedOption);
function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio');

  for (let radio of radios) {
    radio.classList.remove('highlight');
  }

  document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

memeModalCloseBtn.addEventListener('click', closeModal);
function closeModal() {
  memeModal.style.display = 'none';
}

getImageBtn.addEventListener('click', renderCat);
function renderCat() {
  const catObject = getSingleCatObject();

  const { image, alt } = catObject;

  memeModalInner.innerHTML = `
  	<img class="cat-img" src="images/${image}" alt="${alt}">
  	`;

  memeModal.style.display = 'flex';
}
function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  // if (catsArray.length === 1)
  const randomIndex = Math.floor(Math.random() * catsArray.length);

  const singleCatObject = catsArray[randomIndex];
  return singleCatObject;
}
function getMatchingCatsArray() {
  const selectedEmotion = document.querySelector(
    'input[type=radio]:checked'
  )?.value;

  const isGif = gifsOnlyOption.checked;

  const matchingCatsArray = catsData.filter((cat) => {
    if (isGif) return cat.isGif && cat.emotionTags.includes(selectedEmotion);
    return cat.emotionTags.includes(selectedEmotion);
  });
  return matchingCatsArray;
}

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
getEmotionsArray(catsData);

function renderEmotionsRadios() {
  let emotionRadiosHtml = '';

  const emotions = getEmotionsArray(catsData);

  for (let emotion of emotions) {
    emotionRadiosHtml += `
	<div class='radio'>
	<label for='${emotion}'>${emotion}</label>
	<input type='radio' id='${emotion}' value='${emotion}' name='emotions'>
	</div>
	`;
  }
  emotionRadios.innerHTML = emotionRadiosHtml;
}
renderEmotionsRadios();
