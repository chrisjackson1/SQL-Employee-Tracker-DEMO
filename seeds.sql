USE employee_tracker;

INSERT INTO department (name)
VALUES ("Tech"),
       ("Sales"),
       ("HR"),
       ("Marketing"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Senior-Tech", 100000,  1),
        ("Sales-CEO", 10000, 2),
        ("HR-Manager", 100000, 3),
        ("Marking-Ceo", 100000, 4),
        ("Finance-Junior", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("MARK", "LANE", 2, NULL),
       ("Marcus", "Lane", 1, NULL),
       ("Matthew", "Lane", 1, 1),
       ("Casey", "Lane", 1, NULL),
       ("John", "Lane", 1, NULL);
       

      