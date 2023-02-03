const persegiform = document.getElementById("persegiform");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const tampil = document.getElementById("tampilcontainer");

const hasilpersegi = JSON.parse(localStorage.getItem("persegi")) || [];

const addpersegi = (panjang,lebar,hasil) => {
    hasilpersegi.push({
        panjang,
        lebar,
        hasil
    });

localStorage.setItem("persegi", JSON.stringify(hasilpersegi));
 
 return {panjang,lebar,hasil};
}


const buatpersegi = ({panjang,lebar,hasil}) => {

    const divpersegi = document.createElement("div");
    const panjangPersegi  = document.createElement("p");
    const lebarPersegi = document.createElement("p");
    const hasilPersegi = document.createElement("h2");
    const hr = document.createElement("hr");

    panjangPersegi.innerHTML = "panjang : " + panjang;
    lebarPersegi.innerHTML = "lebar : " + lebar;
    hasilPersegi.innerHTML = "Luas persegi : " + hasil;

    divpersegi.append(panjangPersegi,lebarPersegi,hasilPersegi,hr);
    tampil.appendChild(divpersegi);

};

hasilpersegi.forEach(buatpersegi);

persegiform.onsubmit = e => {
    e.preventDefault();

    const vPanjang = panjang.value;
    const vLebar = lebar.value;
    const luas = (vPanjang * vLebar);

    const persegibaru = addpersegi(
        vPanjang,
        vLebar,
        luas
    );

    buatpersegi(persegibaru);

    panjang.value = "";
    lebar.value = "";
};