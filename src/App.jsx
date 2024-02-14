// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Jsx : {}
  // Javascript kodları yazılır.
  let a = 25;
  const firstName = "Jack";

  let vize1 = 80;
  let vize2 = 60;

  let sonuc = false;

  let isimler = [
    "Tolunay",
    "Ali Biçim",
    "Mesut Can Tomay",
    "Alperen",
    "Haset Bey",
  ];

  return (
    <div>
      <p> a değişkenin değeri : {a}</p>
      <p>Müsterinin adı : {firstName}</p>

      <p>Ortalama : {(vize1 + vize2) / 2} </p>

      {sonuc ? (
        <p>Ehliyeti Alabilirsin , Tebrikler</p>
      ) : (
        <p>Ehliyeti alamazsın , kaybol</p>
      )}

      {(vize1 + vize2) / 2 >= 50 ? (
        <p>Tebrikler dersten geçtiniz!!</p>
      ) : (
        <p>Maalesef dersi geçemediniz!!</p>
      )}

      {isimler.map((isim, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid green",
          }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;

/*
 html + javascript = React
 Return'ün içinde html içeriği dönüyoruz.
 Javascriipt kodları return ün dışında yazılır.
 Bir component i yazarsınız bunu başka bir  componentte kullanmak içi export etmemiz gerekir.

--------------------------------------------------

 Javascript olarak yazdığımız kodları html in içerisine yazdırıp serpiştirmek için bir generic yapıya ihtiyaç var bunada jsx deniyor.

 map fonksiyonu kullandığımızda key hatası alırız bu dizideki elemanları sıralarken hepsine ayrı ayrı bir unique değeri olması lazım (birbirinden ayrı özel olması için) bunu kullanırız.
 
 divin içinde css özelliği kullanırken style={{}} şeklinde kullarak yazarız

*/
