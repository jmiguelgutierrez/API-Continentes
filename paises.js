var pais;
const continentes = [
  { value: "europe", texto: "Europa" },
  { value: "africa", texto: "Africa" },
  { value: "asia", texto: "Asia" },
  { value: "americas", texto: "America" },
  { value: "oceania", texto: "Oceania" },
];
cargaPaisesDeContinente = async (value) => {
  let url = `https://restcountries.com/v3.1/region/${value}`;
  let paises = await cargaDatos(url);
  let selectPaises = document.querySelector("#paises");
  selectPaises.innerHTML = "";
  let opttioInicio = document.createElement("option");
  opttioInicio.value = 0;
  opttioInicio.innerHTML = "Selecciona pais....";
  selectPaises.appendChild(opttioInicio);
 
  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.value = pais.name.common;
    option.innerHTML = pais.name.common;
    selectPaises.appendChild(option);
  });
};

cargaDatos = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
//cambio de prueba
       // setTimeout(() => {
            resolve(response.json());
       //}, 5000);
      
    });
  });
};

verPais= async (valorPais)=>{
   let url = `htpps://restcountries.com/v3.1/name/${valorPais}`;
   let pais = await cargaDatos(url);
   DocumentFragment.querySelector("posicion-menu").innerHTML=pais[0].name.common;         
}


cargaSelectContinentes = () => {
  let selectContinentes = document.querySelector("#continentes");
  continentes.forEach((continente) => {
    let option = document.createElement("option");
    option.value = continente.value;
    option.innerHTML = continente.texto;
    selectContinentes.appendChild(option);
  });
};

cargaPais=async (nombrePais)=>{
  let url = `https://restcountries.com/v3.1/name/${nombrePais}`;
  pais=await cargaDatos(url);
  let bandera=document.querySelector("#bandera")
  let escudo=document.querySelector("#escudo")
  let moneda= document.querySelector("#moneda")

bandera.src=pais[0].flags.png;
escudo.src=pais[0].coatOfArms.png;
// moneda.innerHTML = pais[0].currencies

}

CargarGenerales = () =>{
   let moneda = document.querySelector("#moneda")
   let capital = document.querySelector("#capital")
   let namePais = document.querySelector("#namePais")
   let timezones = document.querySelector("#timezones")
   let monedas = Object.values(pais[0].currencies)
   monedas.forEach(prop =>{
      let tabla = document.querySelector("#tabla");
      tabla.innerHTML = "";
      
      let trCabecera=document.createElement("tr");
      let thCabeceraNombre = document.createElement("th");
      let thCabeceraNombrePais = document.createElement("th");
      let thCabeceraSimbolo = document.createElement("th");
      let thCabeceraTimeZones = document.createElement("th");
    
      thCabeceraNombre.innerHTML = "nombre del Pais";
      thCabeceraSimbolo.innerHTML = "simbolo"
      thCabeceraNombrePais.innerHTML ="capital"
      thCabeceraTimeZones.innerHTML ="timezones"
    
      trCabecera.appendChild(thCabeceraNombre);
      trCabecera.appendChild(thCabeceraSimbolo);
      trCabecera.appendChild(thCabeceraNombrePais);
      trCabecera.appendChild(thCabeceraTimeZones);
      tabla.appendChild(trCabecera);


      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.innerHTML = pais[0].name.common;
      let td1 = document.createElement("td");
      td1.innerHTML = prop.symbol;
      let td2 = document.createElement("td");
      td2.innerHTML = pais[0].capital;
      let td3 = document.createElement("td");
      td3.innerHTML = pais[0].timezones;
         
      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tabla.appendChild(tr);

      let aGoogle = document.createElement("a")
      aGoogle.href = pais[0].maps.googleMaps
      aGoogle.target = "_blank";
      let div = document.querySelector("#enlace")
      div.innerHTML = ""
      aGoogle.innerHTML ="Pulse aqui para acceder a Google Maps del pais"
      let aStreet = document.createElement("a")
      aStreet.href = pais[0].maps.openStreetMaps
      aStreet.target = "_blank";
      aStreet.innerHTML ="Pulse aqui para acceder al Open Street del pais"
      div.appendChild(aGoogle);
      div.appendChild(aStreet)
    
   })
}

CargarGeograficos = () =>{
  let subregion = document.querySelector("#subregion")
  let region = document.querySelector("#region")
  let latlng = document.querySelector("#latlng")
  let area = document.querySelector("#area")
  let borders = document.querySelector("#borders")
  let monedas = Object.values(pais[0].currencies)

  monedas.forEach(prop =>{
     let tabla = document.querySelector("#tabla");
     tabla.innerHTML = "";
     
     let trCabecera=document.createElement("tr");
     let thCabeceraSubRegion = document.createElement("th");
     let thCabeceraRegion = document.createElement("th");
     let thCabeceraLatLng = document.createElement("th");
     let thCabeceraArea = document.createElement("th");
     let thCabeceraBorders = document.createElement("th");
     thCabeceraSubRegion.innerHTML = "subregion";
     thCabeceraRegion.innerHTML = "region";
     thCabeceraLatLng.innerHTML ="latlng";
     thCabeceraArea.innerHTML = "area";
     thCabeceraBorders.innerHTML ="borders";
     trCabecera.appendChild(thCabeceraSubRegion);
     trCabecera.appendChild(thCabeceraRegion);
     trCabecera.appendChild(thCabeceraLatLng);
     trCabecera.appendChild(thCabeceraArea);
     trCabecera.appendChild(thCabeceraBorders)
     tabla.appendChild(trCabecera);


     let tr = document.createElement("tr");
     let td = document.createElement("td");
     td.innerHTML = pais[0].region;
     let td1 = document.createElement("td");
     td1.innerHTML = pais[0].subregion;
     let td2 = document.createElement("td");
     td2.innerHTML = pais[0].latlng;
     let td3 = document.createElement("td");
     td3.innerHTML = pais[0].area;
     let td4 = document.createElement("td");
     td4.innerHTML = pais[0].borders;
     tr.appendChild(td);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     tabla.appendChild(tr)
  })
}

CargarTecnicos = () =>{
  let moneda = document.querySelector("#moneda")
  let capital = document.querySelector("#capital")
  let tld = document.querySelector("#tld")
  let cca2 = document.querySelector("#cca2")
  let cca3 = document.querySelector("#cca3")
  let demonyms = document.querySelector("#demonyms")
  let gini = document.querySelector("#gini")

  let monedas = Object.values(pais[0].currencies)
  monedas.forEach(prop =>{
     let tabla = document.querySelector("#tabla");
     tabla.innerHTML = "";
     
     let trCabecera=document.createElement("tr");
     let thCabeceraTopLevelDomain = document.createElement("th");
     let thCabeceracca2 = document.createElement("th");
     let thCabeceracca3 = document.createElement("th");
     let thCabecerademonyms = document.createElement("th");
     let thCabeceragini = document.createElement("th");
     thCabeceraTopLevelDomain.innerHTML = "tld";
     thCabeceracca2.innerHTML = "cca2";
     thCabeceracca3.innerHTML = "cca3";
     thCabecerademonyms.innerHTML = "demonyms";
     thCabeceragini.innerHTML = "gini"
     trCabecera.appendChild(thCabeceraTopLevelDomain);
     trCabecera.appendChild(thCabeceracca2);
     trCabecera.appendChild(thCabeceracca3);
     trCabecera.appendChild(thCabecerademonyms);
     trCabecera.appendChild(thCabeceragini);
     tabla.appendChild(trCabecera);


     let tr = document.createElement("tr");
     let td = document.createElement("td");
     td.innerHTML = pais[0].tld;
     let td1 = document.createElement("td");
     td1.innerHTML = pais[0].cca2;
     let td2 = document.createElement("td");
     td2.innerHTML = pais[0].cca3;
     let td3 = document.createElement("td");
     td3.innerHTML = pais[0].demonyms.eng.f;
     td3.innerHTML = pais[0].demonyms.eng.m;
     td3.innerHTML = pais[0].demonyms.fra.f;
     td3.innerHTML = pais[0].demonyms.fra.m;
     let td4 = document.createElement("td");
     td4.innerHTML = Object.values(pais[0].gini)[0]
     tr.appendChild(td);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     tabla.appendChild(tr);
  })
}

CargarBanderas = () =>{
  let moneda = document.querySelector("#moneda")
  let capital = document.querySelector("#capital")
  let monedas = Object.values(pais[0].currencies)
  monedas.forEach(prop =>{
     let tabla = document.querySelector("#tabla");
     tabla.innerHTML = "";
  /*   
     let trCabecera=document.createElement("tr");
     let thCabeceraNombre = document.createElement("th");
     let thCabeceraSimbolo = document.createElement("th");
     thCabeceraNombre.innerHTML = "nombre";
     thCabeceraSimbolo.innerHTML = "simbolo"
     trCabecera.appendChild(thCabeceraNombre);
     trCabecera.appendChild(thCabeceraSimbolo)
     tabla.appendChild(trCabecera);


     let tr = document.createElement("tr");
     let td = document.createElement("td");
     td.innerHTML = prop.name;
     let td1 = document.createElement("td");
     td1.innerHTML = prop.symbol;
     let td2 = document.createElement("td");
     td2.innerHTML = prop.timezones;
     let td3 = document.createElement("td");
     td3.innerHTML = prop.borders;
     tr.appendChild(td);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tabla.appendChild(tr);*/
  })
}
