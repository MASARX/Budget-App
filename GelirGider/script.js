var gelirMiktar = document.getElementById("gelirMiktarı");
var kalanMiktar = document.getElementById("kalanMiktar");
var giderMiktar = document.getElementById("giderMiktarı");



function gelirEkle() {
    if (document.getElementById("gelirInput").value != "") {
        var gelir = parseInt(document.getElementById("gelirInput").value);
        var toplam = parseInt(gelirMiktar.textContent);
        var kalan = parseInt(kalanMiktar.textContent);
        kalan = kalan + gelir;
        gelir = toplam + gelir;
        gelirMiktar.innerHTML = gelir;
        kalanMiktar.innerHTML = kalan;
        document.getElementById("gelirInput").value = "";
    }

}

function giderEkle() {
    if (document.getElementById("giderMiktarInput").value != "") {
        var giderAciklamaInput = document.getElementById("giderAciklamaInput").value;
        var newpAciklama = document.createElement("p");
        newpAciklama.className = "text-danger text-uppercase font-weight-bold";
        var textpAciklama = document.createTextNode("- " + giderAciklamaInput);
        newpAciklama.appendChild(textpAciklama);
        document.getElementById("aciklamaDiv").appendChild(newpAciklama);


        var giderTutarInput = document.getElementById("giderMiktarInput").value;
        var newpTutar = document.createElement("p");
        newpTutar.className = "text-danger text-uppercase font-weight-bold";
        var textpTutar = document.createTextNode("- " + giderTutarInput);
        newpTutar.appendChild(textpTutar);
        document.getElementById("tutarDiv").appendChild(newpTutar);

        var giderTutarMiktar = parseInt(giderTutarInput);
        var toplamGider = parseInt(giderMiktar.textContent);
        var toplam = parseInt(gelirMiktar.textContent);
        var kalan = parseInt(kalanMiktar.textContent);

        toplamGider = giderTutarMiktar + toplamGider;
        giderMiktar.innerHTML = toplamGider;

        kalan = toplam - toplamGider;
        kalanMiktar.innerHTML = kalan;

        document.getElementById("giderAciklamaInput").value ="";
        document.getElementById("giderMiktarInput").value ="";
    }
}