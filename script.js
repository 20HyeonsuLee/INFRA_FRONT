document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('api-data');

    // API 호출
    fetch('http://localhost:8080/infra-study/test')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            container.textContent = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            container.textContent = 'Error fetching data';
        });
});
