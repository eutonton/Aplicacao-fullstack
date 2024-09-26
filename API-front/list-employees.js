const apiBaseUrl = 'http://localhost:3000/api'; 

function fetchEmployees() {
    fetch(`${apiBaseUrl}/employees`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('employee-table-body');
            tableBody.innerHTML = ''; 
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

window.onload = fetchEmployees;
