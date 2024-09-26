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


document.getElementById('new-employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newEmployee = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        position: document.getElementById('position').value
    };

    fetch(`${apiBaseUrl}/employees`, {  
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
        fetchEmployees(); 
        document.getElementById('new-employee-form').reset(); 
    })
    .catch(error => console.error('Error adding employee:', error));
});

fetchEmployees();
