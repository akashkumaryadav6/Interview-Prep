import { GFG, TUTORIALS } from './sources'

export const sqlQuestions = [
  {
    question: 'Difference between WHERE and HAVING.',
    answer:
      'WHERE filters rows before grouping — cannot use aggregate functions. HAVING filters groups after GROUP BY — used with aggregates like COUNT, SUM, AVG.\n\nRule: WHERE for row-level filters, HAVING for group-level filters. Both can appear in the same query: WHERE first, then GROUP BY, then HAVING.',
    code: [{ language: 'sql', snippet: "-- WHERE — filter rows before grouping\nSELECT dept_id, salary\nFROM employees\nWHERE salary > 50000;\n\n-- HAVING — filter groups after aggregation\nSELECT dept_id, AVG(salary) AS avg_sal\nFROM employees\nGROUP BY dept_id\nHAVING AVG(salary) > 50000;" }],
    source: GFG('difference-between-where-and-having-clause-in-sql'),
  },
  {
    question: 'JOIN types.',
    answer:
      'INNER JOIN — returns only matching rows in both tables.\nLEFT JOIN — all rows from left table + matching right (NULL if no match).\nRIGHT JOIN — all rows from right + matching left.\nFULL OUTER JOIN — all rows from both; NULL where no match.\nCROSS JOIN — Cartesian product (every row paired with every row).\nSELF JOIN — table joined to itself.',
    code: [{ language: 'sql', snippet: "SELECT e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- LEFT: all employees even without department\nSELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id;" }],
    source: GFG('sql-join-set-operators'),
  },
  {
    question: 'Primary key vs foreign key.',
    answer:
      'Primary Key (PK): uniquely identifies each row in a table. Cannot be NULL. Only one per table. Creates clustered index by default in many DBs.\n\nForeign Key (FK): column that references PK of another table. Enforces referential integrity — prevents orphan records. A table can have multiple FKs.',
    code: [{ language: 'sql', snippet: "CREATE TABLE departments (\n    dept_id   INT PRIMARY KEY,\n    dept_name VARCHAR(50)\n);\n\nCREATE TABLE employees (\n    emp_id   INT PRIMARY KEY,\n    name     VARCHAR(100),\n    dept_id  INT,\n    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);" }],
    source: GFG('difference-between-primary-key-and-foreign-key'),
  },
  {
    question: 'Normalize vs denormalize.',
    answer:
      'Normalization: organize data to reduce redundancy — split into related tables (1NF, 2NF, 3NF). Pros: data integrity, less duplication. Cons: more JOINs, complex queries.\n\nDenormalization: intentionally add redundancy for faster reads (e.g., store dept_name in employees table). Pros: faster queries. Cons: update anomalies, more storage.\n\nOLTP systems favor normalization; reporting/analytics often denormalize.',
    source: GFG('normalization-in-dbms'),
  },
  {
    question: 'Write query for duplicate records.',
    answer:
      'Find duplicates using GROUP BY + HAVING COUNT > 1, or window functions like ROW_NUMBER().',
    code: [{ language: 'sql', snippet: "-- Find duplicate emails\nSELECT email, COUNT(*) AS cnt\nFROM users\nGROUP BY email\nHAVING COUNT(*) > 1;\n\n-- List all rows that are duplicates\nSELECT *\nFROM users\nWHERE email IN (\n    SELECT email FROM users\n    GROUP BY email HAVING COUNT(*) > 1\n);" }],
    source: GFG('sql-query-to-find-duplicate-records'),
  },
  {
    question: 'Second highest salary query.',
    answer:
      'Common approaches: subquery with MAX, LIMIT/OFFSET, DENSE_RANK/ROW_NUMBER window function. Handle ties with DENSE_RANK if multiple employees share second-highest salary.',
    code: [{ language: 'sql', snippet: "-- Subquery approach\nSELECT MAX(salary) AS second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n\n-- Window function (handles ties)\nSELECT DISTINCT salary\nFROM (\n    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n    FROM employees\n) ranked\nWHERE rnk = 2;" }],
    source: GFG('sql-query-to-find-second-highest-salary'),
  },
  {
    question: 'Count employees department-wise.',
    answer:
      'Use GROUP BY with COUNT. Add ORDER BY for sorted output. Use LEFT JOIN on departments if you need departments with zero employees.',
    code: [{ language: 'sql', snippet: "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count\nFROM departments d\nLEFT JOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_name\nORDER BY employee_count DESC;" }],
    source: GFG('sql-group-by-count'),
  },
  {
    question: 'Delete duplicate rows.',
    answer:
      'Keep one row per duplicate key, delete the rest. Use ROW_NUMBER() in a CTE (SQL Server, PostgreSQL) or self-join with MIN(id). Always backup or test in transaction first.',
    code: [{ language: 'sql', snippet: "-- Keep lowest id per email (PostgreSQL / SQL Server)\nWITH cte AS (\n    SELECT id,\n           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn\n    FROM users\n)\nDELETE FROM users\nWHERE id IN (SELECT id FROM cte WHERE rn > 1);" }],
    source: GFG('delete-duplicate-rows-in-sql'),
  },
  {
    question: 'Difference between DELETE, DROP, TRUNCATE.',
    answer:
      'DELETE — removes specific rows (with WHERE). Can be rolled back. Triggers fire. Slow for large datasets.\n\nTRUNCATE — removes ALL rows, keeps table structure. Faster, minimal logging. Cannot use WHERE. Resets identity seed.\n\nDROP — removes entire table (structure + data + constraints). Cannot rollback easily.',
    source: GFG('difference-between-delete-drop-and-truncate'),
  },
  {
    question: 'What is indexing?',
    answer:
      'An index is a data structure (usually B-tree) that speeds up data retrieval at the cost of slower writes and extra storage. Like a book index — find rows without full table scan.\n\nTypes: clustered (defines physical order), non-clustered (separate structure). Index columns used in WHERE, JOIN, ORDER BY benefit most.',
    code: [{ language: 'sql', snippet: "CREATE INDEX idx_emp_email ON employees(email);\nCREATE UNIQUE INDEX idx_emp_email_unique ON employees(email);\n\n-- Composite index for multi-column queries\nCREATE INDEX idx_dept_salary ON employees(dept_id, salary);" }],
    source: GFG('indexing-in-databases'),
  },
  {
    question: 'What is a view?',
    answer:
      'A view is a virtual table based on a SQL query — stored query definition, not data. Used to simplify complex queries, restrict column access, and present consistent reporting interfaces.\n\nUpdating views depends on complexity — simple views may be updatable; joins/aggregates often are not.',
    code: [{ language: 'sql', snippet: "CREATE VIEW vw_active_employees AS\nSELECT e.emp_id, e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.status = 'ACTIVE';\n\nSELECT * FROM vw_active_employees;" }],
    source: GFG('sql-views'),
  },
  {
    question: 'What is stored procedure?',
    answer:
      'A stored procedure is precompiled SQL code stored in the database. Called with EXEC/CALL. Used for reusable business logic, batch operations, and security (grant execute without table access).\n\nIn testing: used to seed test data, reset DB state, or validate backend data directly.',
    code: [{ language: 'sql', snippet: "CREATE PROCEDURE sp_get_employees_by_dept\n    @dept_id INT\nAS\nBEGIN\n    SELECT emp_id, name, salary\n    FROM employees\n    WHERE dept_id = @dept_id;\nEND;\n\nEXEC sp_get_employees_by_dept @dept_id = 10;" }],
    source: GFG('stored-procedures-in-sql'),
  },
]
