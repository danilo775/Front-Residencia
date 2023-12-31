 // Inicialize o mapa
 let map = L.map('map').setView([51.505, -0.09], 2);

 // Configure a camada OSM
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
 }).addTo(map);

 // Carregue os dados dos países da API REST
 fetch('https://restcountries.com/v3.1/all')
   .then(response => response.json())
   .then(data => {
     for (const country of data) {
       const option = document.createElement('option');
       option.value = country.cca3;
       option.textContent = country.name.common;
       document.getElementById('paises').appendChild(option);
     }
   });

 // Lide com a mudança na seleção do país
 document.getElementById('paises').addEventListener('change', (event) => {
   const paisSelecionado = event.target.value;

   // Obtenha as coordenadas do país com base no código do país selecionado
   fetch(`https://restcountries.com/v3.1/alpha/${paisSelecionado}`)
     .then(response => response.json())
     .then(data => {
       const latitude = data[0].latlng[0];
       const longitude = data[0].latlng[1];

       // Atualize a visão do mapa com as coordenadas do país selecionado
       const latLong = [latitude, longitude];
       map.setView(latLong, 8);
     });
 });