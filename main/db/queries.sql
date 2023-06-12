SELECT *
FROM employees;

SELECT department, COUNT(id) AS number_employees
FROM employees
GROUP BY department;

SELECT department, SUM(total_employees) AS sum_employees
FROM employees
GROUP BY department;

-- add in salery instead of number of employees
