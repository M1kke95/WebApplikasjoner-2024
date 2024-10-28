import type { DB } from "./db";
import fs from "node:fs/promises";
import { join } from "node:path";
import { ProjectType } from "../../types";

export const seed = async (db: DB) => {
  const path = join(process.cwd(), "src/db/data.json"); 
  console.log("Reading data from file:", path); 

  try {
    const file = await fs.readFile(path, "utf-8");
    const { projects }: { projects: ProjectType[] } = JSON.parse(file);

    console.log("Seeding the following projects:", projects);


    const insertProject = db.prepare(`
      INSERT INTO projects (id, name, description, startDate, endDate, imageUrl)
      VALUES (?, ?, ?, ?, ?, ?);
    `);

    const transaction = db.transaction(() => {
      for (const project of projects) {
        console.log(`Inserting project: ${project.name}`);
        insertProject.run(
          project.id,
          project.name,
          project.description,
          project.startDate,
          project.endDate,
          project.imageUrl
        );
      }
    });

    transaction();
    console.log("inserted projects.");
  } catch (error) {
    console.error("seed error:", error); 
  }
};
