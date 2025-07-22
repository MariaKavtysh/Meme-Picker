import { catsData } from '/data.js';

// Selecting elements
const emotionRadios = document.getElementById('emotion-radios');

const getImageBtn = document.getElementById('get-img-btn');
const gifsOnlyOption = document.getElementById('gifs-only-option');

const emotionsArray = [];

function getEmotionsArray(cats) {
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) emotionsArray.push(emotion);
    }
  }

  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let radioItems = '';
  for (let emotion of emotions) {
    radioItems += `
	  <div class='radio'>
	  	<label for='${emotion}'>${emotion}</label>
		<input type='radio' id='${emotion}' value='${emotion}' name='emotions'>
	  </div>`;
  }

  emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData);

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio');

  for (let radio of radios) {
    radio.classList.remove('highlight');
  }

  document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function getMatchingCatsArray() {
  const checked = document.querySelector('input[type=radio]:checked')?.value;
  console.log(checked);

  const isGif = gifsOnlyOption.checked;
  console.log(isGif);

  //   let matchingCatsArray = catsData.filter((cat) => cat.includes(checked));
  //   console.log(matchingCatsArray);
}

emotionRadios.addEventListener('change', highlightCheckedOption);
getImageBtn.addEventListener('click', getMatchingCatsArray);
