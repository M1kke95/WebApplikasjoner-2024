import { DB } from "./db";
import fs from "node:fs/promises";
import { join } from "node:path";
import { ProjectType } from "../../types";

export const seed = async (db: DB)=> {
    const path = join(import.meta.dirname, "data.json")
    const file = await fs.readFile(path, "utf-8")

    const {projects} = JSON.parse(file) as {
        projects: ProjectType[]
    }

    const insertProject = db.prepare(`
        INSERT INTO projects (id, name, description, startDate, endDate, imageUrl)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    db.transaction(() => {
        for(const project of projects){
            insertProject.run(
                project.id,
                project.name,
                project.description,
                project.startDate,
                project.endDate,
                project.imageUrl
            )
        }
    })
}