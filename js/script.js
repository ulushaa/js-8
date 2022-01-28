let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minuteNumber = document.querySelector('.minutes'),
    hourNumber = document.querySelector('.hours');

function clock() {
    let time  = new Date();
    let minutes = time.getMinutes() * 6;
    let seconds = time.getSeconds() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` :  time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

    setTimeout(() => clock(), 1000);

}
clock();

let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for(let i = 0; i < link.length;i++) {
    link[i].addEventListener('click', function(event) {
        event.preventDefault();
        for(let x = 0; x < link.length;x++) {
            link[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        this.classList.add('active');
        tabs[i].classList.add('active');
    })
}


let hr = document.querySelector('.stopwatch__hours'),
    mn = document.querySelector('.stopwatch__minutes'),
    sc = document.querySelector('.stopwatch__seconds'),
    btn = document.querySelector('.stopwatch__btn');
    tb = document.querySelector('.tabsLink__span');
let tm;

btn.addEventListener('click', function(){
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        tb.classList.add('active')
        setTimeout(() =>st(), 1000)
    }else if(btn.innerHTML == 'stop'){
        btn.innerHTML = 'clear'
        tb.classList.remove('active')
        tb.classList.add('active_clear');
        clearTimeout(tm);
    }else if(btn.innerHTML == 'clear'){
        btn.innerHTML ='start'
        tb.classList.remove('active_clear')
        sc.innerHTML = 0;
        mn.innerHTML = 0;
        hr.innerHTML = 0;
    }else if(btn.innerHTML == 'start'){
        tb.classList.add('active')
    }
})

function st(){
    sc.innerHTML++
if ( sc.innerHTML > 59){
    sc.innerHTML = 0;
    mn.innerHTML ++;
}else if(mn.innerHTML > 59){
    mn.innerHTML = 0;
    hr.innerHTML++;
}else if(hr.innerHTML == 24){
    hr.innerHTML = 0;
    st()
}
tm = setTimeout(() => st(), 1000);
}