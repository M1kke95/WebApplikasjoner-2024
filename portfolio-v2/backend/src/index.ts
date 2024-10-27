import { serve } from '@hono/node-server'
import { v4 as uuidv4 } from 'uuid';

import { Hono } from 'hono'
import { cors } from "hono/cors";
import { Result } from '../types';


let projectList = [
  {
    id: "1",
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque massa vitae lectus aliquam, sit amet tempus orci auctor. Mauris tortor diam, laoreet nec nulla in, scelerisque vulputate ipsum. Mauris varius, nisi non pharetra congue, nulla sapien condimentum lacus, sed euismod risus nisl id nisi. Pellentesque sit amet tristique ligula, id consequat est. Vestibulum vulputate eros at sapien tempor rhoncus. Fusce purus risus, consequat nec pretium et",
    startDate: "01.01.2023",
    endDate: "01.02.2023",
    imageUrl: "image1.jpg"
  },
  {
    id: "2",
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque massa vitae lectus aliquam, sit amet tempus orci auctor. Mauris tortor diam, laoreet nec nulla in, scelerisque vulputate ipsum. Mauris varius, nisi non pharetra congue, nulla sapien condimentum lacus, sed euismod risus nisl id nisi. Pellentesque sit amet tristique ligula, id consequat est. Vestibulum vulputate eros at sapien tempor rhoncus. Fusce purus risus, consequat nec pretium et",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "https://www.uochb.cz/upload/files/ed/dc/eddc6b266ebe570534e85e66f784cbee93441075.jpg"
  },
  {
    id: "3",
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque massa vitae lectus aliquam, sit amet tempus orci auctor. Mauris tortor diam, laoreet nec nulla in, scelerisque vulputate ipsum. Mauris varius, nisi non pharetra congue, nulla sapien condimentum lacus, sed euismod risus nisl id nisi. Pellentesque sit amet tristique ligula, id consequat est. Vestibulum vulputate eros at sapien tempor rhoncus. Fusce purus risus, consequat nec pretium et",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "image3.jpg"
  },
  {
    id: "4",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque massa vitae lectus aliquam, sit amet tempus orci auctor. Mauris tortor diam, laoreet nec nulla in, scelerisque vulputate ipsum. Mauris varius, nisi non pharetra congue, nulla sapien condimentum lacus, sed euismod risus nisl id nisi. Pellentesque sit amet tristique ligula, id consequat est. Vestibulum vulputate eros at sapien tempor rhoncus. Fusce purus risus, consequat nec pretium et",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "image4.jpg"
  },
  {
    id: "5",
    name: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque massa vitae lectus aliquam, sit amet tempus orci auctor. Mauris tortor diam, laoreet nec nulla in, scelerisque vulputate ipsum. Mauris varius, nisi non pharetra congue, nulla sapien condimentum lacus, sed euismod risus nisl id nisi. Pellentesque sit amet tristique ligula, id consequat est. Vestibulum vulputate eros at sapien tempor rhoncus. Fusce purus risus, consequat nec pretium et",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "image5.jpg"
  },
];


const app = new Hono()
app.use("*", cors());



app.get('/projects', (c) => {
  const result: Result<typeof projectList> = {
    success: true,
    data: projectList,
  };
  return c.json(result);
});

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


const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})



