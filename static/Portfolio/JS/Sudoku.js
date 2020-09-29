

document.querySelector('.header__select--wrapper').addEventListener('click', function() {
    this.querySelector('.header__select').classList.toggle('open');
})

for (const option of document.querySelectorAll("header__select--option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.header__select--option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.header__select').querySelector('.header__select--trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.header__select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
