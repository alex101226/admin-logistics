//  开发环境
export default {
  port: 5000,
  host: '127.0.0.1',
  db: {
    port: 3306,
    user: 'root',
    password: 'root',
    host: '127.0.0.1',
    database: 'logistics',
  },
  jwt: {
    secret: 'o2v9WqV3hM8u7zYfHcPqR1s5lTgBj9DkXxN4d0K2SxA=',
    expiresIn: '7d'
    // expiresIn: '1m'
  },
}