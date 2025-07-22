1.  create a function getEmotionsArray() that loops over the catsData and pushes the emotion to a new array, if the array does not already include that emotion
    => now we can extract the emotions from the catsData array and store them in a new array

2.  create a function renderEmotionsRadios() that will call the getEmotionsArray function and then (via another loop) adds innerHtml to the emotionsRadios <div> by creating a string that contains inputs (with type=radio, id=current emotion, value=current emotion, and a generic NAME, that should be the same for all inputs, otherwise they can all be selected, and not just ONE of them) and their labels(with FOR attribute set to current emotion) for each emotion, each inside their own <div>. Call the renderEmotionsRadios(catsData)
    => now we are rendering our inputs on the page

3.  to highlight the selected input we need to grab the id of the selected element via even listener on the emotionsRadio element that listens for 'change' ('click' does not work for selecting form element) and calling a function highlightCheckedOption().
4.  highlightCheckedOption() will use event.target.id (returns id of the selected element) to add class "highlight" to the parentElement of the selected element.
    => now our selected option is highlighted (input text, input field, button), but all of the previously selected options remain highlighted

5.  add a loop inside the highlightCheckedOption() (before adding the class "highlighted"!) to loop over all the elements with the class name of "radio" (getElementsByClassName returns an array-like object we can loop over) and remove the class "highlighted"
    => now only one currently selected element is highlighted

6.  listen for clicks on Get Image btn that will call
7.  renderCat() function that calls getSingleCatObject() and uses the cat object returned by it to create HTML string and render it to the DOM
8.  getSingleCatObject() function that calls getMatchingCatsArray() and uses Math.random to pick a single object from the array returned by getMatchingCatsArray()
9.  getMatchingCatsArray() function that checks if an emotion has been selected and GIFs only checkbox is checked. Then it filters the catsData array and stores only the matching emotions to a new matchingCatsArray.
    => now we are rendering one random cat emotion img/gif depending on user's choice

10. listen for clicks on meme modal window close btn that will call
11. closeModal()
    => now we can close the modal window
