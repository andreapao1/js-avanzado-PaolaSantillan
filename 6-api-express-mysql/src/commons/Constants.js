import { config } from "dotenv"

config();

export default {
    host: process.env.HOST || '31.220.104.219',
    database: process.env.DATABASE || 'u917498081_my_db',
    user: process.env.USER || 'u917498081_user',
    password: process.env.PASSWORD || 'x1;7RPvCiQ'
}

// BASE DE DATOS:  u917498081_my_db
// USUARI:  u917498081_user
// CONTRASEÑA:  x1;7RPvCiQ
// HOST:  31.220.104.219
