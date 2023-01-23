const containerEl = document.getElementById('container');
const cards_length = 72;
const cards = [];

let previousShownCard = undefined;

let icons = [
    'air-freshener',
    'headphones',
    'palette',
    'font',
    'wifi',
    'bicycle',
    'bath',
    'handshake',
    'clock',
    'laugh',
    'hashtag',
    'camera',
    'heart',
    'user',
    'check',
    'download',
    'images',
    'star',
    'music',
    'arrow-right',
    'bomb',
    'poo',
    'cloud',
    'comment',
    'caret-up',
    'truck',
    'arrow-up',
    'hippo',
    'smile',
    'paperclip',
    'bell',
    'filter',
    'gift',
    'umbrella',
    'trash',
    'lock',
]

//    bcopy the icons again (double them)
icons.push(...icons);

for (let i = 0; i < 100; i++) {
    const ind1 = Math.floor(Math.random() * icons.length)
    const ind2 = Math.floor(Math.random() * icons.length)

    const temp = icons[ind1];
    icons[ind1] = icons[ind2];
    icons[ind2] = temp
}

for (let i = 0; i < cards_length; i++) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML = `
    <div class="front">
         <i class="fas fa-${icons[i]}"> </i>
    </div>
    <div class="back">
        <small class="me">Lochinbek</small>
    </div>
    `
    cardEl.addEventListener('click', () => {
        if (!cardEl.classList.contains('show')) {
            cardEl.classList.add('show');
        }

        if (!previousShownCard) {
            previousShownCard = cardEl;
        } else {
            const iconOne = previousShownCard.querySelector('i').classList[1];
            const iconTwo = cardEl.querySelector('i').classList[1];


            if (iconOne !== iconTwo) {
                const temp = previousShownCard;
                setTimeout(() => {
                    temp.classList.remove('show');
                    cardEl.classList.remove('show');
                }, 1000)
            }
            previousShownCard = undefined;
        }

    })

    cards.push(cardEl);

    containerEl.appendChild(cardEl);

    // let rozilik = confirm('Shartlarimizga rozimisiz?')
    // alert("Memory Card Game o'yinini o'ynashga tayyormisiz?!")
}