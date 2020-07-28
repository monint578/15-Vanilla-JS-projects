var quote1 = {
    name: "William Shakespeare",
    description: "English playwright",
    quate: "Life’s but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more; it is a tale told by an idiot, full of sound and fury, signifying nothing. ",
    img: "https://images.unsplash.com/photo-1581344895000-b5deedbd1660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80"
  };
  var quote2 = {
    name: "Paulo Coelho",
    description: "Brazilian lyricist",
    quate: "If pain must come, may it come quickly. Because I have a life to live, and I need to live it in the best way possible. If he has to make a choice, may he make it now. Then I will either wait for him or forget him.",
    img: "https://images.unsplash.com/photo-1522742943744-b3cd4e6f98e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  };
  var quote3 = {
    name: "Mark Manson",
    description: "American author",
    quate: "You and everyone you know are going to be dead soon. And in the short amount of time between here and there, you have a limited amount of fucks to give. Very few, in fact. And if you go around giving a fuck about everything and everyone without conscious thought or choice—well, then you’re going to get fucked.",
    img: "https://images.unsplash.com/photo-1582964580025-70edd4a75a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1397&q=80"
  };
  var quote4 = {
    name: "Michelle Obama",
    description: "Former First Lady of the United States",
    quate: "When you've worked hard, and done well, and walked through that doorway of opportunity, you do not slam it shut behind you. You reach back and you give other folks the same chances that helped you succeed.",
    img: "https://cdn.pixabay.com/photo/2016/01/08/20/02/michelle-obama-1129160_960_720.jpg"
  };
  var quotes = [quote1, quote2, quote3, quote4]
  var namePlace = document.getElementById("name");
  var descriptionPlace = document.getElementById("description");
  var quotePlace = document.getElementById("quate");
  var imgPlace = document.getElementById("img");
  var btnRight = document.getElementById("arrow-right");
  var btnLeft = document.getElementById("arrow-left");

  var indexRight = 0;

  btnRight.addEventListener("click", function(){
    indexRight++;
    
    if (indexRight >= quotes.length) {
      indexRight = 0;
    } 
    namePlace.textContent = quotes[indexRight].name;
    descriptionPlace.textContent = quotes[indexRight].description;
    quotePlace.textContent = quotes[indexRight].quate;
    imgPlace.src = quotes[indexRight].img;
  })

  var indexLeft = quotes.length - 1;

  btnLeft.addEventListener("click", function(){
    indexLeft--;
    
    if (indexLeft < 0 ) {
      indexLeft = quotes.length - 1;
    } 
    namePlace.textContent = quotes[indexLeft].name;
    descriptionPlace.textContent = quotes[indexLeft].description;
    quotePlace.textContent = quotes[indexLeft].quate;
    imgPlace.src = quotes[indexLeft].img;
  })
