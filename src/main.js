fetch("/test.json")
  .then(res => res.json())
  .then(adatok => {
    const tabla = document.getElementById("tabla");

    adatok.forEach(szemely => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${szemely.nev}</td>
        <td>${szemely.vernyomas}</td>
      `;
      tabla.appendChild(tr);
    });
  })
  .catch(err => console.error("Hiba:", err));
