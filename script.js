

let hour=document.querySelector('.hour');
let minuts=document.querySelector('.minuts');
let perids=document.querySelector('.perids');
let second=document.querySelector('.seconds');
function clock(){
    let date= new Date()
    console.log(date)
    h= new Date().getHours()
    m= new Date().getMinutes()
    sec= new Date().getSeconds()
    
    let ampm = h >= 12 ?'PM' : 'AM'

    if(m < '10'){
        m='0' + m
    }
    if(h <'10'){
        h='0' + h
    }
    if(h > '12'){
        h= '0' + (h - 12)
    }

    hour.innerHTML=h;
    minuts.innerHTML=m
    second.innerHTML=sec
    perids.innerHTML=ampm
}
clock()

setInterval(clock, 1000);