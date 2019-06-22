CREATE TABLE IF NOT EXISTS user
    (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(60),
        last_name VARCHAR(60),
        email VARCHAR(255) NOT NULL
    );