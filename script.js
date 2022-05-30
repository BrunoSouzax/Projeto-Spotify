let musicas = [
    {titulo:'Take Me Out', artista:'Franz Ferdinand', src:'songs/Franz Ferdinand - Take Me Out.mp3', img:'img/rock01.jpg'},
    {titulo:'Lemon Tree', artista:'Fools Garden', src:'songs/Fools Garden - Lemon Tree.mp3', img:'img/beach01.jpg'},
    {titulo:'Just the Two of Us', artista:'Bill Withers', src:'songs/Bill Withers - Just the Two of Us.mp3', img:'img/date01.jpg'},
]

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = window.document.querySelector('img');
let nomeMusica = window.document.querySelector('.descricao h2');
let nomeArtista = window.document.querySelector('.descricao i');

renderizarMusica(indexMusica);
// EVENTOS 
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

window.document.querySelector('.anterior').addEventListener('click', () => {
   indexMusica--;
   if (indexMusica < 0) {
       indexMusica = 2;
   }
   renderizarMusica(indexMusica);
});

window.document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
   renderizarMusica(indexMusica);
});

// FUNÇÕES

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });


}

function tocarMusica(){
    musica.play();
    document.querySelector(".botao-pause").style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

