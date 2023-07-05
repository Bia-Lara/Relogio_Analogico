const deg=6;
const hr=document.getElementById('hr');
const mn=document.getElementById('mn');
const sg=document.getElementById('sg');

setInterval(()=>{
    let day=new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hr.style.transform = `rotatez(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotatez(${mm}deg)`;
    sg.style.transform = `rotatez(${ss}deg)`;
})