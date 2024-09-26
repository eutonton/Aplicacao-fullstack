const apiBaseUrl = 'http://localhost:3000/api';  // Certifique-se que a URL está correta

// Função para buscar e exibir os funcionários
function fetchEmployees() {
    fetch(`${apiBaseUrl}/employees`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('employee-table-body');
            tableBody.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados
            data.forEach(employee => {
                const row = `<tr>
                    <td>${employee.name}</td>
                    <td>${employee.age}</td>
                    <td>${employee.position}</td>
                </tr>`;
                tableBody.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch(error => console.error('Error fetching employees:', error));
}

// Carregar os funcionários quando a página for carregada
window.onload = fetchEmployees;
