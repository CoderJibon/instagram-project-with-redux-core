const multer = require("multer");
const path = require("path");

const userPhoto = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "public/user/"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });

  //return storage
  return multer({ storage }).single("photo");
};

module.exports = userPhoto;
