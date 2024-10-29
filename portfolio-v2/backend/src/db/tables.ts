import type { DB } from "./db";

export const createTables = (db: DB) => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      startDate TEXT NOT NULL,
      endDate TEXT NOT NULL,
      imageUrl TEXT,
      publishedAt TEXT NOT NULL, 
      publicStatus BOOLEAN NOT NULL
    );
  `);
};
