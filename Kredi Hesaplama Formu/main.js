function krediHesapla() {
    let cekilecekTutar, vadeSayisi, aylikTaksit, odenecekToplamTutar;
  
    cekilecekTutar = parseFloat(document.querySelector("#txtKrediTutari").value);

    let liste = document.querySelector("#listeVade");
    vadeSayisi = parseInt(liste.options[liste.selectedIndex].value);
  
    if (vadeSayisi == 12) {
        odenecekToplamTutar = cekilecekTutar * 1.1;
    } else if (vadeSayisi == 24) {   
        odenecekToplamTutar = cekilecekTutar * 1.13;
    } else if (vadeSayisi == 36) {
        odenecekToplamTutar = cekilecekTutar * 1.16;
    } else if (vadeSayisi == 48) {
        odenecekToplamTutar = cekilecekTutar * 1.18;
    }

    aylikTaksit = odenecekToplamTutar / vadeSayisi;
  
    document.querySelector("#sonuc").innerHTML =
        "Toplam geri ödenecek tutar: " +
        odenecekToplamTutar.toFixed(2) +
        "<br>" +
        "Aylık taksit tutarı: " +
        aylikTaksit.toFixed(2);
}
