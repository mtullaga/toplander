var clicked = false;

document.body.addEventListener('click', function (e) {
    if (!clicked) {
        e.preventDefault();
        document.querySelector('.checkbox').style.display = 'none';
        document.querySelector('.load').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.block').style.display = 'none';
            document.querySelector('.block-final').style.opacity = 1;
            document.querySelector('.block-final').style.display = 'block';
            document.getElementById('pagelink').style.display = 'block';
        }, 3000);
        clicked = true;
    }
});
