import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";


const projectList = [
  {
    id: "1",
    name: "Project 1",
    description: "Description of project 1",
    startDate: "01.01.2023",
    endDate: "01.02.2023",
    imageUrl: "https://example.com/image1.jpg"
  },
  {
    id: "2",
    name: "Project 2",
    description: "Description of project 2",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "https://example.com/image2.jpg"
  },
  {
    id: "3",
    name: "Project 3",
    description: "Description of project 3",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "https://example.com/image3.jpg"
  },
  {
    id: "4",
    name: "Project 4",
    description: "Description of project 4",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "https://example.com/image4.jpg"
  },
  {
    id: "5",
    name: "Project 5",
    description: "Description of project 5",
    startDate: "02.01.2023",
    endDate: "02.02.2023",
    imageUrl: "https://example.com/image5.jpg"
  },
];


const app = new Hono()
app.use("*", cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/projects', (c) => {

   return c.json(projectList)
  
  
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

