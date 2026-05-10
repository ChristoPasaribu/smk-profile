import { createDatabaseConnection } from '../../../../libs/common/src/utils/dbFactory';

// DEBUG LOG
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);

export const dbProfile = createDatabaseConnection(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    process.env.DB_HOST!,
    Number(process.env.DB_PORT)
);