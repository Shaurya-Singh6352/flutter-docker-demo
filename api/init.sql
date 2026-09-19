CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL
);

INSERT INTO messages (content) VALUES ('Hello from the database! All three services are talking to each other.');