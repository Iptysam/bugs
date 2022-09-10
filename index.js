const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');
const navlinks = document.querySelectorAll('.nav-link');
const closeBtn = document.querySelector('.close_btn');
const body = document.querySelector('.main');

function open() {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
}

hamburger.addEventListener('click', open);
closeBtn.addEventListener('click', open);
navlinks.forEach((link) => {
  link.addEventListener('click', open);
});

const allCards = [{
  id: 'card1',
  title: 'Tonic',
  feature: 'Images/Frame2.png',
  sdescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  ldescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container1',
},
{
  id: 'card2',
  title: 'Multi-Post Stories',
  feature: 'Images/Frame2.png',
  sdescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  ldescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio3.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container2',
},
{
  id: 'card3',
  title: 'Tonic',
  feature: 'Images/Frame2.png',
  sdescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  ldescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio1.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container3',
},
{
  id: 'card4',
  title: 'Multi-post Stories',
  feature: 'Images/Frame2.png',
  sdescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  ldescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio2.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container4',
},
];

const cardsEl = document.querySelector('.container');
allCards.forEach((card) => {
  cardsEl.innerHTML += `
  <div class="card1 c-card">
  <img src="${card.cardImage}" alt="snaphot" class="p-img">
  <div>
    <h2>${card.title}</h2>
    <img src="${card.feature}" alt="counter">  
    <p>
    A daily selection of privately personalized reads; no accounts or sign-ups required.
    </p>
    <ul class="Lang">
      <li>html</li>
      <li>css</li>
      <li>javascript</li>
    </ul>
    <button class="button proj">See Project</button>
  </div> 
</div>`;
});

const popUp = (i) => `
<section class="modal">
  <div class="modal-1">
    <h2 class="title">${allCards[i].title}</h2>
    <button class="closebutton"><img src="Images/Icon.svg"></button>
  </div>
  <div class="u-li">
    <img src="${allCards[i].feature}" alt="dot">  
  </div>
  <img src="${allCards[i].cardImage}" alt="Image" class="popupImg">
  <div class="modal-div">
    <p class="long">${allCards[i].ldescrip}</p>
    <div>
      <ul class="lang-list">
        <li class="lists">${allCards[i].stags[0]}</li>
        <li class="lists">${allCards[i].stags[1]}</li>
        <li class="lists">${allCards[i].stags[2]}</li>
      </ul>
      <ul class="lang-list">
        <li>${allCards[i].btags[3]}</li>
        <li>${allCards[i].btags[4]}</li>
        <li>${allCards[i].btags[5]}</li>
      </ul>
      <div class= "tabs">
        <button class="button"><a href="${allCards[i].liveLink}">See live</a><img src="Images/Icon2.png" alt="icon" class="liveicon"></button>
        <button class="button">See source<img src="Images/Vector(1).jpg" alt="icon" class="liveicon"></button>
      </div>
    </div>
  </div>
</section>
`;

const seeProject = document.querySelectorAll('.proj');
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    const mainHolder = document.createElement('div');
    mainHolder.classList.add('pop-modal');
    mainHolder.innerHTML = popUp(i);
    document.body.appendChild(mainHolder);
    body.classList.toggle('blur');
    document.body.style.overflow = 'hidden';
    function pClose() {
      document.body.removeChild(mainHolder);
      body.classList.toggle('blur');
      document.body.style.overflow = 'visible';
    }
    const closepop = document.querySelector('.closebutton');
    closepop.addEventListener('click', pClose);
  });
}

const mainform = document.getElementById('form-in');
const validity = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}/;
mainform.addEventListener('submit', (e) => {
  const emailenter = document.getElementById('email-in').value;
  const message = document.getElementById('msg');
  if (!validity.test(emailenter)) {
    e.preventDefault();
    message.innerHTML = 'Error: Email Required in LowerCase';
    message.classList.add('err');
    return false;
  }
  return true;
});
