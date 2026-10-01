import React from "react";

function Greetings({ nama, umur, alamat, jurusan }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>{nama}</h2>

      <p>Umur : {umur} Tahun</p>

      <p>Alamat : {alamat}</p>

      <p>Jurusan : {jurusan}</p>
    </div>
  );
}

export default Greetings;