const ELEMENT_COUNT = 10;

for (var i = 0; i < ELEMENT_COUNT; i++) {
 
    var div = document.createElement('div');
    div.classList.add('btn');
    var targetid = 'target' + i;
    div.setAttribute('id', targetid);
    div.addEventListener('click', () => {
        div.classList.toggle('circle');
    })
    document.body.appendChild(div);
}