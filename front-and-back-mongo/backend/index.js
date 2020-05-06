const express = require('express')
const app = express()
const port = 3001

app.use(express.json()); // para poder recibir JSONs en las request











const mongoose = require('mongoose');
const databaseName = 'rc8d';
mongoose.connect('mongodb://localhost/' + databaseName, {useNewUrlParser: true});
// const db = mongoose.connection;
// db.once('open', function() {
//   console.log("Connected to " + databaseName);
// });

const projectsSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now }
});
const ProjectsModel = mongoose.model('projects', projectsSchema);














app.post('/v1/projects', (req, res) => {

  console.log(req.body);
  const document = req.body;
  
  const project = new ProjectsModel(document);
  project.save();

  res.json({ message: "The new project has been created" });
})

app.get('/v1/', (req, res) => {
  res.json({ message: "The server is working" });
})

app.use(function (req, res, next) {
  res.status(404).json({ message: "Sorry can't find that!" })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
