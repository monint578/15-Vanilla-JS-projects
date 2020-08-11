var quotes = [
  {
    name: "William Shakespeares",
    title: "English playwright",
    img:
      "https://images.unsplash.com/photo-1581344895000-b5deedbd1660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80",
    quote:
      "All the world ‘s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts",
  },
  {
    name: "Paulo Coelho",
    title: "Brazilian lyricist",
    img:
      "https://images.unsplash.com/photo-1522742943744-b3cd4e6f98e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    quote:
      "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
  },
  {
    name: "Mark Manson",
    title: "American author",
    img:
      "https://images.unsplash.com/photo-1582964580025-70edd4a75a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1097&q=80",
    quote:
      "The desire for more positive experience is itself a negative experience. And, paradoxically, the acceptance of one’s negative experience is itself a positive experience.",
  },
  {
    name: "Leonardo da Vinci",
    title: "Polymath",
    img:
      "https://cdn.pixabay.com/photo/2018/03/17/22/38/sculpture-3235368_960_720.jpg",
    quote:
      "I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection. 'Tis the business of little minds to shrink, but they whose heart is firm, and whose conscience approves their conduct, will pursue their principles unto death.",
  },
];

const img = document.getElementById("img");
const name = document.getElementById("name");
const title = document.getElementById("title");
const qoute = document.getElementById("qoute");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = quotes[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  title.textContent = item.title;
  quote.textContent = item.quote;
});

function showPerson(person) {
  const item = quotes[person];
  img.src = item.img;
  name.textContent = item.name;
  title.textContent = item.title;
  quote.textContent = item.quote;
}

function handleClickRight() {
  currentItem++;
  if (currentItem > quotes.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
};

function handleClickLeft() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = quotes.length - 1;
  }
  showPerson(currentItem);
};

