document.getElementById('generate-btn').addEventListener('click', function() {
  fetch('http://localhost:3000')
    .then(response => response.json())
    .then(employee => displayEmployee(employee))
    .catch(error => console.error('Error fetching employee:', error));
});

function displayEmployee(employee) {
  const employeesContainer = document.getElementById('employees-container');
  const employeeCardHTML = createEmployeeCard(employee);
  employeesContainer.innerHTML = employeeCardHTML;
}

function createEmployeeCard(employee) {
  return `
    <div class="col-lg-6 employee-card">
      <img src="${employee.imageUrl}" alt="${employee.name}" class="employee-image">
      <div class="employee-details">
        <h3>${employee.name}</h3>
        <p><strong>Job Title:</strong> ${employee.jobTitle}</p>
        <p><strong>Email:</strong> ${employee.email}</p>
        <p><strong>Phone Number:</strong> ${employee.phoneNumber}</p>
      </div>
    </div>
  `;
}
