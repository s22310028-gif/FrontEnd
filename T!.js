const student = {
    name: "Pasulatan, FIlbert Rivaldy",
    age: 20,
    faculty: "Computer Science"
};

console.log(student);

const nama = "Pasulatan";

const student2 = {
    nama: "Zee",
    sapa() {
        return `Halo, saya ${this.nama}, bukan ${nama}`;
    }
};

console.log(student2.sapa());

const student3 = {
    nama: "Zee",
    sapa() {
        return `Halo, saya ${this.nama}`;
    }
};

console.log(student3.sapa());

const fakultas = {
    nama: "Komputer",
    dekan: "Stenly",
    PT: "UNKLAB"
};

const { nama: namaFakultas, dekan } = fakultas;

console.log(namaFakultas);
console.log(dekan);

const fakultasBaru = {
    ...fakultas,
    nama: "Kedokteran",
    dekan: "Mike"
};

console.log(fakultasBaru);
console.log(fakultas);

const mahasiswa = [
  { id: 1, nama: "Willy", nilai: 82 },
  { id: 2, nama: "Smith", nilai: 68 },
  { id: 3, nama: "Edgar", nilai: 91 }
];

const akun {
    nama1 : "Pasulatan, Filbert Rivaldy",
    alamat : ( 
        desa : "aermadidi",
        kode pos : "95371",
    )
};
console.log(akun.alamat.desa);
console.log