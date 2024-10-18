import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";


const projectList = [
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

   return c.json(projectList)
  
  
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

