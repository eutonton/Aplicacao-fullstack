const apiBaseUrl = 'http://localhost:3000/api';  // Corrigir para incluir o prefixo /api

// Função para buscar e exibir os funcionários
function fetchEmployees() {
    fetch(`${apiBaseUrl}/employees`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('employee-table-body');
            tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados
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

// Função para adicionar novo funcionário
document.getElementById('new-employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newEmployee = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        position: document.getElementById('position').value
    };

    fetch(`${apiBaseUrl}/employees`, {  // Corrigido para usar /api/employees
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEmployee)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Error ${response.status}: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Employee added successfully!');
        fetchEmployees(); // Atualiza a lista de funcionários
        document.getElementById('new-employee-form').reset(); // Reseta o formulário
    })
    .catch(error => console.error('Error adding employee:', error));
});

// Carregar os funcionários quando a página for carregada
fetchEmployees();
