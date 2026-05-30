-- Create a simple table for users
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT UNIQUE,
    joined_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Add some sample data so we can see it later
INSERT INTO users (username, email) 
VALUES ('Pixel_Dev', 'pixel@example.com'),
       ('Code_Master', 'master@example.com');