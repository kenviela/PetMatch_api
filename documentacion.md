# 🐾 PetMatch - Backend

Este es el backend del proyecto PetMatch, una aplicación orientada a facilitar la adopción responsable de mascotas. Desarrollado con Node.js, Express y Knex.js, conectado a una base de datos MySQL.

## 🔧 Tecnologías usadas

- Node.js
- Express
- Knex.js
- MySQL
- Cors
- Dotenv
- Body-parser

## ⚙️ Configuración del entorno

Asegúrate de tener Node.js y MySQL instalados en tu sistema. Luego:

1. Clona este repositorio:
   ```
   git clone git@github.com:kenviela/PetMatch_api.git
   git https://github.com/kenviela/PetMatch_api.git
   cd PetMatch_api
   ```

# Instala las dependencias:

npm install

# Configura la base de datos local en MySQL:

# 🗂️ Estructura del proyecto

PetMatch_api/
├── entities/
│ └── pets/
| └── users/
| └── Login/
├── api.routes.js
├── middlewares
├── databases/
│ └── index.js
├── migrations/
├── .env
├── package.json
├── server.js
└── README.md
🔌 Conexión a la base de datos (Knex)
La configuración de Knex está en knexfile.js
