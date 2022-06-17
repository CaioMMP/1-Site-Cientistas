function Ver_Imagem() {
    var elemento1 = document.getElementById("texto");
    var elemento2 = document.getElementById("link");
    var elemento3 = document.getElementById("imagem");
    var leia = parseInt(document.getElementById("leia").value);
    if (leia == 1) {
    elemento3.innerHTML = ("<img src=../img/mm-galileo-01.jpg>")
    elemento1.innerHTML = "Galileo Galilei"
    elemento2.innerHTML = ("<a href=Galileo.html>" + "Saiba Mais" + "</a>")
    } else if (leia == 2) {
    elemento3.innerHTML = ("<img src=../img/mm-newton-17-0.jpg>")
    elemento1.innerHTML = "Isaac Newton"
    elemento2.innerHTML = ("<a href=IsaacNewton.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 3) {
    elemento3.innerHTML = ("<img src=../img/mm-mari-curie-02-0.jpg>")
    elemento1.innerHTML = "Marie Curie"
    elemento2.innerHTML = ("<a href=MarieCurie.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 4) {
    elemento3.innerHTML = ("<img src=../img/mm-tesla-03.jpg>")
    elemento1.innerHTML = "Nikola Tesla"
    elemento2.innerHTML = ("<a href=NikolaTesla.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 5) {
    elemento3.innerHTML = ("<img src=../img/mm-einstein-19-0.jpg>")
    elemento1.innerHTML = "Albert Einstein"
    elemento2.innerHTML = ("<a href=AlbertEinstein.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 6) {
    elemento3.innerHTML = ("<img src=../img/mm-darwin.jpg>")
    elemento1.innerHTML = "Charles Darwin"
    elemento2.innerHTML = ("<a href=CharlesDarwin.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 7) {
    elemento3.innerHTML = ("<img src=../img/mm-ada-lovelace.jpg>")
    elemento1.innerHTML = "Ada Lovelace"
    elemento2.innerHTML = ("<a href=AdaLovelace.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 8) {
    elemento3.innerHTML = ("<img src=../img/mm-stephen-01-0.jpg>")
    elemento1.innerHTML = "Stephen Hawking"
    elemento2.innerHTML = ("<a href=StephenHawking.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 9) {
    elemento3.innerHTML = ("<img src=../img/mm-pitagoras.jpg>")
    elemento1.innerHTML = "Pitágoras"
    elemento2.innerHTML = ("<a href=Pitágoras.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 10) {
    elemento3.innerHTML = ("<img src=../img/Erwin_Schrödinger_(1933).jpg>")
    elemento1.innerHTML = "Erwin Schrödinger"
    elemento2.innerHTML = ("<a href=ErwinSchrödinger.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 11) {
    elemento3.innerHTML = ("<img src=../img/mm-rosalind-franklin.jpg>")
    elemento1.innerHTML = "Rosalind Franklin"
    elemento2.innerHTML = ("<a href=RosalindFranklin.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 12) {
    elemento3.innerHTML = ("<img src=../img/mm-lavosier.jpg>")
    elemento1.innerHTML = "Antoine-Laurent Lavoisier"
    elemento2.innerHTML = ("<a href=Lavoisier.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 13) {
    elemento3.innerHTML = ("<img src=../img/mm-bohr.jpg>")
    elemento1.innerHTML = "Niels Bohr"
    elemento2.innerHTML = ("<a href=NielsBohr.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 14) {
    elemento3.innerHTML = ("<img src=../img/mm-werner-heisenberg.jpg>")
    elemento1.innerHTML = "Werner Heisenberg"
    elemento2.innerHTML = ("<a href=WernerHeisenberg.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 15) {
    elemento3.innerHTML = ("<img src=../img/mm-louis-pasteur.jpg>")
    elemento1.innerHTML = "Louis Pasteur"
    elemento2.innerHTML = ("<a href=LouisPasteur.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 16) {
    elemento3.innerHTML = ("<img src=../img/mm-turing19.jpg>")
    elemento1.innerHTML = "Alan Turing"
    elemento2.innerHTML = ("<a href=AlanTuring.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 17) {
    elemento3.innerHTML = ("<img src=../img/mm-freud.jpg>")
    elemento1.innerHTML = "Sigmund Freud"
    elemento2.innerHTML = ("<a href=SigmundFreud.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 18) {
    elemento3.innerHTML = ("<img src=../img/Carl_Sagan_Planetary_Society.jfif>")
    elemento1.innerHTML = "Carl Sagan"
    elemento2.innerHTML = ("<a href=CarlSagan.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 19) {
    elemento3.innerHTML = ("<img src=../img/i341594.jpeg>")
    elemento1.innerHTML = "Neil deGrasse Tyson"
    elemento2.innerHTML = ("<a href=NeildeGrasseTyson.html>" + "Saiba Mais" + "</a>")
    }else if (leia == 20) {
    elemento3.innerHTML = ("<img src=../img/BenFranklinDuplessis.jpg>")
    elemento1.innerHTML = "Benjamin Franklin"
    elemento2.innerHTML = ("<a href=BenjaminFranklin.html>" + "Saiba Mais" + "</a>")
    }else {
        elemento3.innerHTML = ("")
        elemento1.innerHTML = "Digite um Número de 1 a 20"
        elemento2.innerHTML = ("")
    }
}