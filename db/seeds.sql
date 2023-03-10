INSERT INTO department (id, name)
VALUES (01, "Billing"),
       (02, "Human Resources"),
       (03, "Customer Experience"),
       (04, "Information Technology"),
       (05, "Administration");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 95000, 101),
       ("Senior Lead", 65000, 102),
       ("Engineer", 80000, 103),
       ("Customer Liaison", 50000, 104),
       ("Receptionist", 40000, 105);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Walter", "White", 1375, 11),
       ("Jesse", "Pinkman", 1667, 14),
       ("Hank", "Schrader", 1889, 16),
       ("Gus", "Fring", 1717, 12),
       ("Saul", "Goodman", 1315, 19);
       
