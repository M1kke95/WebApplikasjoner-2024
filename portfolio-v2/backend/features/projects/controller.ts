import { Hono } from "hono";
import { projectService } from "./services";

export const createProjectController = (projectService: projectService) => {
    const app = new Hono()

    app.get('/', async(c) =>{
        const query = c.req.query()

        const result = await projectService.list(query)

        if(!result.success){
            return c.json(result, {status: 404})
        }
            return c.json(result, {status: 200})
    })


    app.post("/", async (c) => {
        const data = await c.req.json();

        const result = await projectService.create(data)

        if(!result.success){
            return c.json(result, {status: 404})
        }
            return c.json(result, {status: 201})
    })
    return app;
}

export const projectController = createProjectController(projectService)