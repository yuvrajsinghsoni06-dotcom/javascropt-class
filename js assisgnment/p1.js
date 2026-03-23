const form=document.querySelector('#form');
const eventCards=document.querySelector('.event_cards');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(EventTitle.value)
    console.log(Eventdate.value)
    console.log(Category.value)
    console.log(Description.value)})
    const card=document.createElement('div');
    card.innerHTML=`<div class="card">
    <h3>${EventTitle.value}</h3>
    <p>${Eventdate.value}</p
    <button>${Category.value}</button>
    <p>${Description.value}</p>
    </div>`;
    delete
    eventCards.appendChild(card);
