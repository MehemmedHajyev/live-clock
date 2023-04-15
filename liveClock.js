
const currentTime = () => {

    const el = document.querySelector("h1");
  
    let data = new Date();
    let hh = data.getHours();
    let mm = data.getMinutes();
    let ss = data.getSeconds();
  
    hh = hh < 10 ? `0${hh}`: hh;
    mm = mm < 10 ? `0${mm}`: mm;
    ss = ss < 10 ? `0${ss}`: ss;
  
    let time = `${hh}:${mm}:${ss}`;
  
    el.innerHTML = time;
    console.log(time);
  
  };
  
  currentTime();
  
  setInterval(currentTime, 1000);