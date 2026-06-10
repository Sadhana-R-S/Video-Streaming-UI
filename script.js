const player = document.getElementById("player");
const videos = document.querySelectorAll(".videoitem");
const title = document.getElementById("title");
const toggleBtn = document.getElementById("themeToggle");

videos.forEach(video =>{
    video.addEventListener("click", ()=>{
        videos.forEach(v=> v.classList.remove("active"));
        video.classList.add("active");
        const newsrc = video.getAttribute("data-src");
        const newtitle = video.getAttribute("data-title");
        player.src= newsrc;
        player.play();
        title.textContent = newtitle;
    })
})

if (localStorage.getItem("theme")=="dark"){
    document.body.classList.add("dark");
     toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggleBtn.textContent="☀️";
        localStorage.setItem("theme","dark");
    }
    else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme","light");
  }
})