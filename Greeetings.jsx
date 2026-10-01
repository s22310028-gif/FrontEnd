function Features() {
  return (
    <section style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}>
        Features
      </h2>

      {mahasiswa.map((mhs) => (
        <Greetings
          key={mhs.id}
          nama={mhs.nama}
          umur={mhs.umur}
          alamat={mhs.alamat}
          jurusan={mhs.jurusan}