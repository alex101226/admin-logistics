//  生产环境
export default {
  port: 9092,
  host: '0.0.0.0',
  db: {
    port: 3306,
    user: 'logistics',
    password: 'Root@2025', //  Root@2025
    host: 'logistics-db',
    database: 'logistics_db',
  },
  jwt: {
    secret: 'o2v9WqV3hM8u7zYfHcPqR1s5lTgBj9DkXxN4d0K2SxA=',
    expiresIn: '7d'
  },
}

