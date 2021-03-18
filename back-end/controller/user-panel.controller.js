const client = require("../config/prisma-config");

exports.getAllProjects = async  (req, res, next) => {
    //get all projects 
    try {
        const projects = await client.project.findMany({
          include: {
            technologies: true,
            images: true,
          },
        });
      res.status(200).json(projects);
    } catch (err) {
       next(err);
    }
  }

exports.findProjectsByTech = async (req, res, next) => {
    //
    try {
        const techId = Number(req.params.technologyId);
        
        const techWithProjects = await client.technology.findUnique({
         where : {id: techId},
         include: {
           projects: true
         }
        });
      res.status(200).json(techWithProjects);
      } catch (err) {
       next(err);
      }
    }

    