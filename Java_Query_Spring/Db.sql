CREATE TABLE utente (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE libro (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titolo VARCHAR(200) NOT NULL,
    utente_id BIGINT,
    FOREIGN KEY (utente_id) REFERENCES utente(id)
);

-- Inserisci utenti
INSERT INTO utente (nome) VALUES ('Maria');
INSERT INTO utente (nome) VALUES ('Anna');

-- Inserisci libri
INSERT INTO libro (titolo, utente_id) VALUES ('La Divina Commedia', 1);
INSERT INTO libro (titolo, utente_id) VALUES ('Il Capitale', 1);
INSERT INTO libro (titolo, utente_id) VALUES ('Orgoglio e Pregiudizio', 2);
