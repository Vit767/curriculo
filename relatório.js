     // Bar Chart
     const spendingChart = document.getElementById('barChart').getContext('2d');
     new Chart(spendingChart, {
         type: 'bar',
         data: {
             labels: ['Alemanha', 'Índia', 'Reino Unido', 'EUA', 'China'],
             datasets: [{
                 label: 'Gastos Médios Com Eletrônicos ($)',
                 data: [2804.31, 2783.15, 2763.54, 2611.6, 2445.38],
                 backgroundColor: '#4BC0C0'
             }]
         },
         options: { scales: { y: { beginAtZero: true, title: { display: true, text: 'Gastos ($)' } } } }
     });
     
             // Line Chart
             const lineCtx = document.getElementById('lineChart').getContext('2d');
             new Chart(lineCtx, {
                 type: 'line',
                 data: {
             labels: ['Alemanha', 'Índia', 'Reino Unido', 'EUA', 'China'],
             datasets: [{
                 label: 'Gastos Médios ($)',
                 data: [2804.31, 2783.15, 2763.54, 2611.6, 2445.38],
                 backgroundColor: '#4BC0C0'
             }]
         },
         options: { scales: { y: { beginAtZero: true, title: { display: true, text: 'Gastos ($)' } } } }
     });
     




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
    
    