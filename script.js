// Heart animation
const heartContainer = document.getElementById('heart-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random()*100 + 'vw';
    heart.style.animationDuration = 4 + Math.random()*3 + 's';
    heart.style.width = 10 + Math.random()*20 + 'px';
    heart.style.height = heart.style.width;
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 300);

// Page navigation
const pages = document.querySelectorAll('.page');
function showPage(page) { pages.forEach(p=>p.classList.remove('active')); page.classList.add('active'); }

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', ()=> showPage(document.getElementById('adventure-page')));

// Stage 1: Adventure choice
const adventureBtns = document.querySelectorAll('#adventure-page .option-btn');
const challengeTitle = document.getElementById('challenge-title');
const challengeArea = document.getElementById('challenge-area');
const challengeNext = document.getElementById('challenge-next');

adventureBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const path = btn.dataset.path;
        startChallenge(path);
    });
});

function startChallenge(path){
    showPage(document.getElementById('challenge-page'));
    challengeArea.innerHTML = '';
    challengeNext.style.display='none';

    if(path==='stars'){
        challengeTitle.textContent = 'Click on 5 stars 🌟 to collect them!';
        for(let i=0;i<5;i++){
            const star = document.createElement('div');
            star.classList.add('click-item');
            star.style.top = Math.random()*150 + 'px';
            star.style.left = Math.random()*80 + 'vw';
            challengeArea.appendChild(star);
        }
        let count=0;
        challengeArea.querySelectorAll('.click-item').forEach(star=>{
            star.addEventListener('click', ()=>{
                star.remove(); count++;
                if(count===5) challengeNext.style.display='inline-block';
            });
        });
    } else if(path==='picnic'){
        challengeTitle.textContent = 'Drag the items to the picnic blanket!';
        for(let i=0;i<3;i++){
            const item = document.createElement('div');
            item.classList.add('click-item');
            item.style.background='orange';
            item.style.top = Math.random()*150 + 'px';
            item.style.left = Math.random()*80 + 'vw';
            challengeArea.appendChild(item);
        }
        challengeNext.style.display='inline-block';
    } else if(path==='movie'){
        challengeTitle.textContent = 'Pop all the popcorn 🍿!';
        for(let i=0;i<10;i++){
            const pop = document.createElement('div');
            pop.classList.add('click-item');
            pop.style.background='yellow';
            pop.style.top = Math.random()*150 + 'px';
            pop.style.left = Math.random()*80 + 'vw';
            challengeArea.appendChild(pop);
        }
        let count=0;
        challengeArea.querySelectorAll('.click-item').forEach(pop=>{
            pop.addEventListener('click', ()=>{
                pop.remove(); count++;
                if(count===10) challengeNext.style.display='inline-block';
            });
        });
    }
}

challengeNext.addEventListener('click', ()=> showPage(document.getElementById('miss-page')));

// Miss Me Page
document.querySelectorAll('#miss-page .option-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const choice = btn.dataset.choice;
        let title='', content='';
        if(choice==='call'){ title="u called me! 💕"; content="Hearing ur voice made me so happy!<br><img src='https://via.placeholder.com/200'>";}
        else if(choice==='stubborn'){ title="u were stubborn 😏"; content="I was confused, but secretly I loved ur attitude!<br><img src='https://via.placeholder.com/200'>";}
        else if(choice==='chats'){ title="Reading old chats 💌"; content="u smiled remembering our moments together!<br><img src='https://via.placeholder.com/200'>";}
        document.getElementById('result-title').innerHTML = title;
        document.getElementById('result-content').innerHTML = content;
        showPage(document.getElementById('result-page'));
    });
});

// Restart
document.getElementById('restart-btn').addEventListener('click', ()=> showPage(document.getElementById('start-page')));