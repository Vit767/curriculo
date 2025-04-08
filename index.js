 // Sales Chart
 const ctx = document.getElementById('salesChart').getContext('2d');
 new Chart(ctx, {
     type: 'line',
     data: {
 labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
 datasets: [
     { label: 'EUA', data: [111.37, 224.65, 102.12, 148.1, 83.93, 300.49, 328.38, 239.21, 104.51, 444.57, 367.74], borderColor: '#4BC0C0', fill: false },
     { label: 'China', data: [77.62, 93.38, 499.89, 478.75, 254.1, 429.4, 250.08, 137.11, 267.07, 279.7, 276.79], borderColor: '#FF6384', fill: false },
     { label: 'Índia', data: [324.15, 432.38, 411.94, 234.01, 177.82, 177.61, 367.68, 102.28, 292.4, 252.77, 79.66], borderColor: '#36A2EB', fill: false }
 ]
},
options: { scales: { y: { beginAtZero: true, title: { display: true, text: 'Vendas (Milhões)' } } } }
});

 // Leaflet Map
 const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
L.marker([39.8283, -98.5795]).addTo(map).bindPopup('EUA: 367.74M');
L.marker([35.8617, 104.1954]).addTo(map).bindPopup('China: 276.79M');
L.marker([20.5937, 78.9629]).addTo(map).bindPopup('Índia: 79.66M');
L.marker([-14.2350, -51.9253]).addTo(map).bindPopup('Brasil: 447.89M');
L.marker([51.1657, 10.4515]).addTo(map).bindPopup('Alemanha: 216.96M');




document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter-text');
    const text = "Lembrando que, para análises avançadas como regressão linear e modelagem de dados complexos, eu utilizo Python.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Velocidade de digitação (100ms por letra)
        } else {
            // Após completar, espera 10 segundos e reinicia
            setTimeout(() => {
                textElement.textContent = '';
                index = 0;
                typeWriter();
            }, 10000); // 10 segundos (10000ms)
        }
    }

    // Inicia o efeito
    typeWriter();
});