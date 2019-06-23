CREATE TABLE IF NOT EXISTS post
    (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(80) NOT NULL,
        subtitle VARCHAR(144),
        article TEXT
    );