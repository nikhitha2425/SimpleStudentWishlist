const epicMixPriyanka = [
    ["Pal-pal dil ke pass", "https://www.youtube.com/watch?v=AMuRRXCuy-4"],
    ["Moh-moh ke dhaage", "https://www.youtube.com/watch?v=peBsfgbOlYM"],
    ["Jab koi baat bigad jaaye", "https://www.youtube.com/watch?v=2iX_WAvNm0k"],
    ["Dil to pagal hai", "https://www.youtube.com/watch?v=lZ2PhyBF3GQ"],
    ["Chandni, o meri Chandni", "https://www.youtube.com/watch?v=dRvvrAmcCJw"],
    ["Tum dil ki dhadkan mein", "https://www.youtube.com/watch?v=3Z_x7vBqr6E"],
    ["Dulhe ka sehra suhana", "https://www.youtube.com/watch?v=iZAv9zDeFSc"],
    ["Ho jaata hai kaise pyaar", "https://www.youtube.com/watch?v=zb_B2sGkJUI"],
    ["Saathiya, sathiya", "https://www.youtube.com/watch?v=eMA6GHTQ4WA"],
    ["O humdum suniyo re", "https://www.youtube.com/watch?v=_9geEbZIAJM"],
    ["So gaya ye jahan", "https://www.youtube.com/watch?v=L4FmY6tuCcs"],
    ["Heeriye, heeriye",  "https://www.youtube.com/watch?v=RLzC55ai0eo"],
  ]
  
  const epicMixVivek = [
    ["Ammayi", "https://open.spotify.com/track/4kVsV4GhcNpHSDs6siioM0?si=c6f366236e644912"],
    ["Come Through", "https://open.spotify.com/track/4yNtO1F3flXZ4v3Ry1MzuP?si=99f279227e554323"],
    ["Night Changes", "https://open.spotify.com/track/5O2P9iiztwhomNh8xkR9lJ?si=24c3a254d8e645f4"],
    ["Perfect", "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=e4c2a2eba69943e2"], 
    ["Heat Waves", "https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp?si=4ac8a76b85934432"],
    ["Love me like you do", "https://open.spotify.com/track/3zHq9ouUJQFQRf3cm1rRLu?si=00713f578cae43a5"],
    ["Let me down slowly", "https://open.spotify.com/track/2qxmye6gAegTMjLKEBoR3d?si=900f8873f4ee42c3"],
    ["Chiru chiru", "https://open.spotify.com/track/6O1VWYPfl85dDeKiaCJKza?si=54d167a2a5124b21"],
    ["Rooba Rooba", "https://open.spotify.com/track/3Ix1lrKBoFOFUWWNwXyoag?si=a9b4d04a8bfc4f96"],
    ["Leharaayi", "https://open.spotify.com/track/6DFXFqK5PTGqTzTbdj47uV?si=7daa4f2d1caf4924"],
    ["Sajde", "https://open.spotify.com/track/7kiZ6Zf66oX6yMovt3gC1a?si=c7097e069eb7444f"],
    ["Kurchi Madathapetti", "https://open.spotify.com/track/0hY9eA74QrMCJuWEx7fo9y?si=ec18cb17605f4ceb"]   
];

const buttonVivek = document.querySelector("#vivek-list");
const buttonPriyanka = document.querySelector("#priyanka-list");
const total = document.querySelector(".total");
const mixList = document.querySelector(".mix");

buttonVivek.addEventListener("click", function() {
    mixInfo(epicMixVivek);
    mixList.classList.remove("hide");
    total.innerText = `Vivek's list - ${epicMixVivek.length} great songs!`;
});

buttonPriyanka.addEventListener("click", function() {
    mixInfo(epicMixPriyanka);
    mixList.classList.remove("hide");
    total.innerText = `Priyanka's list - ${epicMixPriyanka.length} great songs!`;
});

const mixInfo = function(mix) {
    // Remove existing child elements of the ul
    while(mixList.firstChild) {
        mixList.removeChild(mixList.firstChild); 
    }

    // Add song details to the ul
    mix.forEach(function(song, index){
        let li = document.createElement("li");
        li.classList.add("song");
        li.innerHTML = `<div class="song-number">#${index+1}</div>
            <div class="song-name"> ${song[0]}</div>
            <div class="song-watch">
            <a href="${song[1]}" target="_blank">
            <img src="img/spotify.jpeg"><br>
            Play 
            </a>
            </div>
        `;
        mixList.append(li);
    });
}
