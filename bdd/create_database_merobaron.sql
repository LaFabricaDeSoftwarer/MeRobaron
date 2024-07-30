-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS merobaron;

-- Usar la base de datos
USE merobaron;

-- Tabla Direccion (Location)
CREATE TABLE IF NOT EXISTS Direccion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Direccion VARCHAR(255) NOT NULL,
    Latitud DECIMAL(10, 8) NOT NULL,
    Longitud DECIMAL(11, 8) NOT NULL
);

-- Tabla Persona (Person)
CREATE TABLE IF NOT EXISTS Persona (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Apellido VARCHAR(100),
    Nombre VARCHAR(100),
    Calle VARCHAR(255),
    Barrio VARCHAR(100),
    Numero VARCHAR(50),
    Ciudad VARCHAR(100),
    TipoDocumento VARCHAR(50),
    NroDocumento VARCHAR(50)
);

-- Tabla Denunciante (Reporter)
CREATE TABLE IF NOT EXISTS Denunciante (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    AceptaCondicion BOOLEAN NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    TipoDocumento VARCHAR(50) NOT NULL,
    NroDocumento VARCHAR(50) NOT NULL,
    Edad INT,
    Telefono VARCHAR(50),
    Calle VARCHAR(255),
    Numero VARCHAR(50),
    Barrio VARCHAR(100),
    Localidad VARCHAR(100)
);

-- Tabla Denuncia (Report)
CREATE TABLE IF NOT EXISTS Denuncia (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DenuncianteID INT,
    Fecha DATE NOT NULL,
    DireccionID INT,
    Detalle TEXT,
    ConozcoAlDenunciado BOOLEAN,
    HayVictimas BOOLEAN,
    HayTestigos BOOLEAN,
    FOREIGN KEY (DenuncianteID) REFERENCES Denunciante(ID),
    FOREIGN KEY (DireccionID) REFERENCES Direccion(ID)
);

-- Tabla Denunciado (Reported)
CREATE TABLE IF NOT EXISTS Denunciado (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PersonaID INT,
    DenunciaID INT,
    Vestimenta TEXT,
    Apariencia TEXT,
    FOREIGN KEY (PersonaID) REFERENCES Persona(ID),
    FOREIGN KEY (DenunciaID) REFERENCES Denuncia(ID)
);

-- Tabla Victima (Victim)
CREATE TABLE IF NOT EXISTS Victima (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PersonaID INT,
    DenunciaID INT,
    FOREIGN KEY (PersonaID) REFERENCES Persona(ID),
    FOREIGN KEY (DenunciaID) REFERENCES Denuncia(ID)
);

-- Tabla Testigo (Witness)
CREATE TABLE IF NOT EXISTS Testigo (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PersonaID INT,
    DenunciaID INT,
    FOREIGN KEY (PersonaID) REFERENCES Persona(ID),
    FOREIGN KEY (DenunciaID) REFERENCES Denuncia(ID)
);