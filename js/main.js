
window.addEventListener('scroll', function () {
    var header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const colorSwitch = document.querySelector('theme-switch input[type="checkbox]');

function switchColor(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }
}

colorSwitch.addEventListener('change',switchColor,false);