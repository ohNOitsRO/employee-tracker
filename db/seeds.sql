INSERT INTO department (id, name)
VALUES (01, "Billing"),
       (02, "Human Resources"),
       (03, "Customer Experience"),
       (04, "Information Technology"),
       (05, "Administration")

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Manager", 95000, 101)
       (001, "Senior Lead", 65000, 102)
       (003, "Engineer", 80000, 103)
       (004, "Customer Liaison", 50000, 104)
       (005, "Receptionist", 40000, 105)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "White", "Walter", 1375, 11)
       (002, "Pinkman", "Jesse", 1667, 14)
       (003, "Schrader", "Hank", 1889, 16)
       (004, "Fring", "Gus", 1717, 12)
       (005, "Goodman", "Saul", 1315, 19)
       
