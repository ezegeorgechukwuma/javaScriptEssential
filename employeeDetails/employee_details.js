const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'html' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'css' },
      //... More employee records can be added here
    ];

     // Function to display all employees
    //  added the function as it was not initially declared
     function displayEmployees() {
        const totalEmployees = employees.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
     }
        function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

    function displayHREmployees() {
        const hrEmployees = employees.filter(employee => employee.department === 'HR');
         const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
         document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
   }

   function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
      else{

      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}//added missing curly braces

    function findEmployeeBySpecialization(employeeSpecialization) {
        const foundEmployee = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p><p>ID : ${foundEmployee.id}</p> <P>Name : ${foundEmployee.name}</p> <p>Age : ${foundEmployee.age}</p> <p>Department : ${foundEmployee.department}</p> <p>Salary : $${foundEmployee.salary}</p> <p>Specialization : ${foundEmployee.specialization}</p></p>`;
    }
      else{

      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';

    }
    }