import { db, type DB } from "../../src/db/db";
import type { Result } from "../../types"; 
import { ProjectType } from "../../types";


type ProjectRepository = {
  list: (query?: Record<string, string>) => Promise<Result<ProjectType[]>>;
  create: (data: ProjectType) => Promise<Result<ProjectType>>;
};

export const createProjectRepository = (db: DB): ProjectRepository => {

    const list = async(
        query?: Record<string, string>
    ): Promise<Result<ProjectType[]>> => {

        try {
            const statement = db.prepare('SELECT * from projects')

            const data = statement.all() as ProjectType[]
            return {
                success:true,
                data
            }
        } catch (error) {
            return {
                success:false,
                error: {
                    code: "404",
                    message: "Can't find projects"
                }
            }
        }
        
    }

    const create = async(data: ProjectType): Promise<Result<ProjectType>>=>{
        try {
            const projectDB = {
                id: data.id ?? crypto.randomUUID(),
                name: data.name,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
                imageUrl: data.imageUrl || '',
                publishedAt: data.publishedAt,
                publicStatus: data.publicStatus
            }

            const query = db.prepare(`
                INSERT INTO projects (id, name, description, startDate, endDate, imageUrl, publishedAt, publicStatus)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `);
            
            const result = query.run(
                projectDB.id,
                projectDB.name,
                projectDB.description,
                projectDB.startDate,
                projectDB.endDate,
                projectDB.imageUrl,
                projectDB.publishedAt,
                projectDB.publicStatus
            )

            return{
                success:true,
                data: projectDB,
            }
        } catch (error) {
            return{
                success:false,
                error: {
                    code: "internal server error",
                    message: "unable to create projects"
                }
            }
        }
    }

  return {
    list,
    create,
  };
};


export const projectRepository = createProjectRepository(db);
