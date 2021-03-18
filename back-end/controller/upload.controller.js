const client = require("../config/prisma-config");

exports.uploadFile = async (req, res, next) => {
    console.log(req.file.path, "path");
	try {
        const projectId = Number(req.params.id);
		const newFile = req.file.path; 
        const createdFile = await client.image.create({
            data: 
            { image_link: newFile,
              projectId: projectId}
        });
        res.status(200).json(createdFile);
	} catch (err) {
		next(err);
	}
};
