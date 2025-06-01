// ⬇️ 進入網頁時自動生成 1~78 的選項
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("cardCount");
  for (let i = 1; i <= 78; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;  // 顯示數字
    select.appendChild(opt);
  }
});

const tarotDeck = ['the-fool', 'the-magician', 'the-high-priestess', 'the-empress', 'the-hierophant', 'the-lovers', 'the-chariot', 'strength', 'the-hermit', 'wheel-of-fortune', 'justice', 'the-hanged-man', 'death', 'temperance', 'the-devil', 'the-tower', 'the-star', 'the-moon', 'the-sun', 'judgement', 'the-world', 'ace-of-cups', 'two-of-cups', 'three-of-cups', 'four-of-cups', 'five-of-cups', 'six-of-cups', 'seven-of-cups', 'eight-of-cups', 'nine-of-cups', 'ten-of-cups', 'page-of-cups', 'knight-of-cups', 'queen-of-cups', 'king-of-cups', 'ace-of-wands', 'two-of-wands', 'three-of-wands', 'four-of-wands', 'five-of-wands', 'six-of-wands', 'seven-of-wands', 'eight-of-wands', 'nine-of-wands', 'ten-of-wands', 'page-of-wands', 'knight-of-wands', 'queen-of-wands', 'king-of-wands', 'ace-of-swords', 'two-of-swords', 'three-of-swords', 'four-of-swords', 'five-of-swords', 'six-of-swords', 'seven-of-swords', 'eight-of-swords', 'nine-of-swords', 'ten-of-swords', 'page-of-swords', 'knight-of-swords', 'queen-of-swords', 'king-of-swords', 'ace-of-pentacles', 'two-of-pentacles', 'three-of-pentacles', 'four-of-pentacles', 'five-of-pentacles', 'six-of-pentacles', 'seven-of-pentacles', 'eight-of-pentacles', 'nine-of-pentacles', 'ten-of-pentacles', 'page-of-pentacles', 'knight-of-pentacles', 'queen-of-pentacles', 'king-of-pentacles'];

function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
}
function drawCards(){
  const count=parseInt(document.getElementById('cardCount').value);
  const deck=[...tarotDeck];
  shuffle(deck);
  const picks=deck.slice(0,count);
  const deckDiv=document.getElementById('deck');
  deckDiv.innerHTML='';
  picks.forEach((card,i)=>{
    const cardDiv=document.createElement('div');
    cardDiv.className='card';
    cardDiv.onclick=()=>cardDiv.classList.toggle('flipped');
    const inner=document.createElement('div');
    inner.className='card-inner';
    const front=document.createElement('div');
    front.className='card-front';
    front.innerHTML='<img src="cards/back.png" alt="back">';
    const back=document.createElement('div');
    back.className='card-back';
    back.innerHTML=`<img src="cards/${card}.png" alt="${card}">`;
    inner.appendChild(front);
    inner.appendChild(back);
    cardDiv.appendChild(inner);
    setTimeout(()=>deckDiv.appendChild(cardDiv),i*300);
  });
}

function flipAll() {
  // 抓所有還沒翻的 .card，全部加上 flipped
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('flipped');
  });
}

