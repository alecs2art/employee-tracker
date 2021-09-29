INSERT INTO departments (name)
VALUES
    ("sales"),("enginerring"),("HR"),("executive");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("sales rep", 60, 1),
    ("elecrtic engineer", 80, 2),
    ("HR specialist", 60, 3),
    ("CEO", 200, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Leia", "Organa", 1, 1),
    ("Han", "Solo", 2, 2),
    ("C3", "PO", 3, 3),
    ("Luke", "Skywalker", 4, 4);
