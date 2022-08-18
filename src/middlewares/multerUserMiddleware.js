const path = require('path');
const multer = require('multer');

// ************ Multer config ************

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/users');
	},
	filename: (req, file, cb) => {
		let fileName = file.fieldname + "_" + Date.now() + path.extname(file.originalname);
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile;