import fs from "fs";
import path from "path";

const vezeteknevek = [
  "Kovács", "Szabó", "Tóth", "Nagy", "Kiss",
  "Varga", "Molnár", "Balogh", "Farkas", "Papp"
];

const keresztnevek = [
  "János", "Péter", "László", "Gábor", "István",
  "Anna", "Éva", "Katalin", "Zsuzsa", "Mária"
];

const adatok = [];

const randomElem = arr => arr[Math.floor(Math.random() * arr.length)];
const randomVerNyomas = () => {
  const sys = Math.floor(Math.random() * 41) + 100;
  const dia = Math.floor(Math.random() * 31) + 60;
  return `${sys}/${dia}`;
};

for (let i = 0; i < 20; i++) {
  adatok.push({
    nev: `${randomElem(vezeteknevek)} ${randomElem(keresztnevek)}`,
    vernyomas: randomVerNyomas()
  });
}

const json = JSON.stringify(adatok, null, 2);
const filePath = path.join("public", "test.json");

fs.writeFileSync(filePath, json, "utf8");

console.log("✅ public/test.json létrehozva");
