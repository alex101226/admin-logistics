//  生成角色表数据,只在迁移的时候执行
import mysql from 'mysql2/promise';
import config from '../server/config/index.js';

//  数据库连接
const conn = await mysql.createConnection({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 角色数据
const roles = [
  { role_name: 'root', role_description: '超级管理员', created_at: '2025-09-13 01:42:10', updated_at: '2025-09-13 01:42:10' },
  { role_name: 'admin', role_description: '普通管理员', created_at: '2025-09-13 01:42:10', updated_at: '2025-09-13 01:42:10' }
];

async function generateRole() {
  try {
    console.log('🚀 开始初始化 dr_role 表...');

    for (const item of roles) {
      await conn.execute(`
          INSERT INTO 'lg_roles'
            (role_name, role_description, created_at, updated_at)
          VALUES (?, ?, NOW(), NOW());
          , [item.role_name, item.role_description]`)
    }

    console.log('✅ lg_role 数据初始化成功');
  } catch (err) {
    console.error('❌ 初始化失败：', err);
  } finally {
    await conn.destroy();
  }
}
generateRole().catch(console.error);