const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function justLookAtIt(e) {
    e.stopPropagation();
    console.log(this.classList.value);
}

button.addEventListener('click', ()=> console.log('yes'), {once: true});
divs.forEach(div => div.addEventListener('click', justLookAtIt));
//divs.forEach(div => div.addEventListener('click', justLookAtIt, {capture: true, once: true}));
//if after the function we add object { capture: true }, the events will be fired on capture phase, not on the bubbling one (by default capture is set to false)

//e.stopPropagation() => stops bubbling the event up, it just focuses and fires the event on the clicked element (stopPropagation means stopBubbling)

//{once: true} => by defalut it's set to false, it fires the event when clicked and then removes it