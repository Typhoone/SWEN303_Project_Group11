(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {
    var animationArray = ['Buy!', 'Sell!', 'That\'s it!', 'No nonsense!', 'Free to use!'];
    var animationTxt = document.getElementById('animationText');
    var animationIndex = 0;
    var animationDelay = 500;

    var noSearch = true; /*True when the user hasn't searched anything yet.*/
    var searchField = document.getElementById('search');
    var searchedFor = document.getElementById('searchedFor');
    var searchResultsContainer = document.getElementById('searchResults');
    var previousSearch = '';

    var collapseToggled = false;
    var collapse = document.getElementById('collapse');

    app.animateText = function(){
      animationTxt.innerHTML = animationArray[animationIndex];
      animationTxt.className = 'animated fadeInUp';
      animationIndex += 1;
      if(animationIndex == animationArray.length){
        animationIndex = 0;
      }
      setTimeout(function(){
        animationTxt.className = 'animated fadeOutUp';
        setTimeout(function(){
          app.animateText();
        }, 2000);
      }, 3000);
    }

    app.search = function(){
      /*searchField.value; this is the content in the search*/
      console.log(searchField.value);
      searchedFor.innerHTML = searchField.value;
      collapse.innerHTML = searchResultsContainer.innerHTML;
      collapse.toggle();
      previousSearch = searchField.value;
    }

    app.animateText();
  });  
})(document);

