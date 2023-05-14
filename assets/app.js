const startingMinutes = 1;
let defaultTime = startingMinutes * 60 ;
let time = defaultTime ;

let score = 0

const countdownEl = document.getElementById('countdown');
const scoreEl = document.getElementById('score');

setInterval(updateCountdown, 1000);

function updateCountdown(next_soal) {
    const minutes = Math.floor(time / 60);
    let seconds =  time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time == 0) {
        btn.click()
    }   
}

function resetCountdown() {
  time = defaultTime
}

var gambar = [
    {
      url: 'img/soal1.jpg',
      jawaban: 'orang-orang berdiskusi'
    },
    {
      url: 'img/soal2.jpg',
      jawaban: 'demokrasi pancasila'
    },
    {
      url: 'img/soal3.jpg',
      jawaban: 'reformasi 1988'
    },
    {
      url: 'img/soal4.jpg',
      jawaban: 'sukarno'
    },
    {
      url: 'img/soal5.jpg',
      jawaban: '18 agustus 1945'
    }
  ];

  var index = Math.floor(Math.random() * gambar.length);
var gambarSekarang = gambar[index];

var img = document.getElementById('gambar');
img.src = gambarSekarang.url;
var btn = document.getElementById('cek');

btn.addEventListener('click', function() {
  var jawabanInput = document.querySelector('#jawaban input');
  var jawaban = jawabanInput.value.toLowerCase();

  if (jawaban === gambarSekarang.jawaban) {
    document.getElementById('result-dialog').innerHTML = 'Jawaban Benar!';
    document.getElementById('dialog-dark').showModal();
    score += 100
  } else {
    document.getElementById('result-dialog').innerHTML = 'Jawaban Salah!';
    document.getElementById('dialog-dark').showModal();
  }
  
  scoreEl.innerHTML = score
  resetCountdown()
  gambar.splice(index, 1)
  jawabanInput.value = '';
  index = Math.floor(Math.random() * gambar.length);
  gambarSekarang = gambar[index];
  img.src = gambarSekarang.url;
});