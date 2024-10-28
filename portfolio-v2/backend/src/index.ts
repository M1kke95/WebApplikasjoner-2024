import { serve } from '@hono/node-server'
import { v4 as uuidv4 } from 'uuid';

import { Hono } from 'hono'
import { cors } from "hono/cors";
import { ProjectType, Result } from '../types';
import db from './db/db';


const app = new Hono()
app.use("*", cors());

app.get('/projects', (c) => {
  const projects = db.prepare('SELECT * FROM projects').all() as ProjectType[];
  const result = { success: true, data: projects };
  return c.json(result);
});

app.get('/projects/:id', (c) => {
  const id = c.req.param('id')

  const project = db.prepare('Select * from projects where id = ?').get(id) as ProjectType

  if(!project){
    return c.json({success:false, message: "Could not fint the project"}, 404)
  }
  return c.json({success: true, data: project}, 201)
})

app.post('/projects', async (c) => {
  const data = await c.req.json()

  if(!data){
    return c.json({success: false, message:"Missing required data"}, 400)
  }

  const newProject = {
    id: uuidv4(),
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data. endDate,
    imageUrl: data.imageUrl || ''
  }

  const insert = db.prepare(`
    INSERT INTO projects (id, name, description, startDate, endDate, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?);
  `);

  insert.run(newProject.id, newProject.name, newProject.description, newProject.startDate, newProject.endDate, newProject.imageUrl)

  return c.json(newProject, 201)

})

app.delete('/projects/:id', async (c) =>{
  const id = c.req.param('id')

  const deleteProject = db.prepare('DELETE from projects where id = ?')
  const result = deleteProject.run(id)

  if(!result){
    return c.json({success: false, message:"Could not find the project"}, 404)
  }
  return c.json({message: "project deleted successfully"})


})

app.patch('/projects/:id', async (c) => {
  const id = c.req.param('id')
  const {name, description, startDate, endDate, imageUrl} = await c.req.json()

  const currentProject = db.prepare('SELECT * FROM projects WHERE id = ?').get(id) as ProjectType;

  const updatedName = name !== undefined ? name: currentProject.name;
  const updatedDescription = description !== undefined ? description: currentProject.description;
  const updatedStartDate = startDate !== undefined ? startDate: currentProject.startDate;
  const updatedEndDate = endDate !== undefined ? endDate: currentProject.endDate;
  const updatedImageUrl = imageUrl !== undefined ? imageUrl: currentProject.imageUrl;

  const updateProject = db.prepare(`
    UPDATE projects 
    SET name = ?, description = ?, startDate = ?, endDate = ?, imageUrl = ?
    WHERE id = ?;
  `);

  const result = updateProject.run(
    updatedName,
    updatedDescription,
    updatedStartDate,
    updatedEndDate,
    updatedImageUrl,
    id
  )

  return c.json({message: "Table has been updated"})
})


/*
app.get('/projects', (c) => {
  const result: Result<typeof projectList> = {
    success: true,
    data: projectList,
  };
  return c.json(result);
});*/
/*
app.get('/projects/:id', (c) => {
  const id =  c.req.param('id')

  const project = projectList.filter((singleProject) => singleProject.id === id)
  return c.json(project)
})


app.post('/projects', async (c) => {
  const data = await c.req.json()

  if(!data){
    return c.json({message: "missing data"}, 400)
  }

  const newProject = {
    id: uuidv4(),
    name: data.name,
    description: data.description,
    startDate: new Date(data.startDate).toISOString(),
    endDate: new Date(data.endDate).toISOString(),
    imageUrl: data.imageUrl || ''
  }

    projectList.push(newProject)
    return c.json(newProject, 201)

})

app.delete('/projects/:id', (c) => {
  const id = c.req.param('id')

  projectList = projectList.filter((project) => project.id !== id)
  return c.json({message: "slettet", data: projectList})
})

app.patch('/projects/:id', async (c) => {
  const id = c.req.param('id');
  const { name, description, startDate, endDate, imageUrl } = await c.req.json();

  projectList = projectList.map((project) => 
    project.id === id ? { ...project, 
      name: name || project.name,
      description: description || project.description,
      startDate: startDate || project.startDate,
      endDate: endDate || project.endDate,
      imageUrl: imageUrl || project.imageUrl 
    } : project
  );
})
*/

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})



