//Image Upload

const multer = require('multer');

//Folder where to store and file naming. 
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	},
});


exports.uploadImage = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		console.log(file.mimetype == 'image/jpeg');
		if ( //formats acepted 
			file.mimetype == 'image/png' ||
			file.mimetype == 'image/jpg' ||
			file.mimetype == 'image/jpeg' ||
			file.mimetype == 'image/gif'
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Invalid file'));
		}
	},
}).single('image_link');