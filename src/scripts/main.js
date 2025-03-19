'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const employeeList = document.querySelector('ul');
  const employees = Array.from(employeeList.children);

  function parseSalary(salary) {
    return Number(salary.replace(/[$,]/g, ''));
  }

  function sortList(list) {
    const sortedEmployees = [...list].sort((a, b) => {
      return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
    });

    employeeList.innerHTML = '';
    sortedEmployees.forEach((emp) => employeeList.appendChild(emp));
  }

  function getEmployees(list) {
    return list.map((emp) => ({
      name: emp.textContent.trim(),
      position: emp.dataset.position,
      salary: parseSalary(emp.dataset.salary),
      age: Number(emp.dataset.age),
    }));
  }

  sortList(employees);
  getEmployees(employees);
});
