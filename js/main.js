/* Prototype JSON for bookmarks. */
window.bookmarkData = {
  "key": "value",
  "bookmarks": [
    {  "href": "https://www.primagames.com/games/elder-scrolls-online/guides/elder-scrolls-online-morrowind-eguide",
      "image": "img/bookmarks/TESO-Morrowind-01-HD.png",
      "title": "The Elder Scrolls Online: Morrowind eGuide" 
    },
    {  "href": "https://www.primagames.com/games/fallout-76/guides/fallout-76-eguide",
      "image": "img/bookmarks/Fallout-76-05-HD.png",
      "title": "Fallout 76 eGuide" 
    },
    {  "href": "http://deltiasgaming.com/eso-stamina-nightblade-dps-build/",
      "image": "",
      "title": "ESO Stamina Nightblade DPS Build" 
    },
    {  "href": "http://eso-skills.com/",
      "image": "",
      "title": "ESO Skill Calculator" 
    }
  ]
};

$( document ).ready(function() {

  /* Paralax scrolling and blur for background image. */
  $(window).scroll(function(){
    $(".blurParallaxBg__image").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".blurParallaxBg__image").css("top", 1 - $(window).scrollTop() / 4);
  });

  /* Populate bookmarks */
  if(!$.isEmptyObject(window.bookmarkData)) {
    var bookmarkHtml = '';
    var bookmarkElement = document.getElementById("bookmarks");
    var bookmarks = window.bookmarkData.bookmarks;

    // For each bookmark in bookmarks ...
    bookmarks.forEach(function(bookmark) {
     
      // The bookmark template.
      var bookmarkTemplate = `
        <div class="grid__item">
          <a class="bookmark aspect-ratio-box" href="${bookmark.href}" style="background-image: url('${bookmark.image}')">
            <div class="bookmark__content">
              <div class="bookmark__title">${bookmark.title}</div>
            </div>
          </a>
        </div>
      `;  

      bookmarkHtml += bookmarkTemplate;
    });

    bookmarkElement.innerHTML = bookmarkHtml;
  }
});