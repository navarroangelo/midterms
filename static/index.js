const multer = require("multer");
const express = require("express");
const app = express();

// BODY PARSER REQUIREMENT
const bodyParser = require("body-parser");

// APPLICATION/X-WWW-FORM-URLENCODED PARSER
const urlencodedparser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFIle(__dirname + "/" + index.html);
});

app.get("/about", (req, res) => {
  res.sendFIle(__dirname + "/" + about.html);
});

app.get("/blog", (req, res) => {
  res.sendFIle(__dirname + "/" + blog.html);
});

app.get("/upload", (req, res) => {
  res.sendFIle(__dirname + "/" + upload.html);
});

app.get("/contact", (req, res) => {
  res.sendFIle(__dirname + "/" + contact.html);
});

app.get("/profile", (req, res) => {
  res.sendFIle(__dirname + "/" + profile.html);
});

// POST
app.post("/formPost", urlencodedparser, (req, res) => {
  // OUTPUT IN JSON FORMAT
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    id: req.body.worker_id,
    email: req.body.email,
    phone: req.body.phone,
    department: req.body.department,
    dob: req.body.dob,
    purpose: req.body.purpose,
  };

  // OTHER FORMATTING
  const htmlPost = `<!DOCTYPE html>
            <html lang="en">
            <head>
                    <style>
                            body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f2f2f2;
                                    padding: 20px;
                            }

                            h1 {
                                    color: #333;
                                    text-align: center;
                            }

                            p {
                                    margin-bottom: 10px;
                            }

                            strong {
                                    font-weight: bold;
                            }

                            .container {
                                    max-width: 600px;
                                    margin: 0 auto;
                                    background-color: #fff;
                                    padding: 20px;
                                    border-radius: 5px;
                                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                            }
                    </style>
            </head>
            <body>
                    <div class="container">
                            <h1>Express.JS Employee Information</h1>
                            <p>
                                    <strong>
                                            First Name:
                                    </strong> ${response.first_name}
                            </p>
                            <p>
                                    <strong>
                                            Last Name:
                                    </strong> ${response.last_name}
                            </p>
                            <p>
                                    <strong>
                                            Worker ID:
                                    </strong> ${response.id}
                            </p>
                            <p>
                                    <strong>
                                            E-Mail:
                                    </strong> ${response.email}
                            </p>
                            <p>
                                    <strong>
                                            Phone:
                                    </strong> ${response.phone}
                            </p>
                            <p>
                                    <strong>
                                            Date of Birth:
                                    </strong> ${response.dob}
                            <p>
                            <p>
                                    <strong>
                                            Purpose:
                                    </strong> ${response.purpose}
                            <p>
                                    <strong>
                                            Department:
                                    </strong> ${response.department}
                            </p>
                    </div>
            </body>
            </html>`;

  console.log(htmlPost);
  res.end(htmlPost);
});

// IMPORT STATEMENTS FOR PATH, MIME TYPES, AND MULTER
const path = require("path");
const mime = require("mime-types");

// MULTER TO SUPPORT FILE UPLOADS
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

// MULTER UPLOAD ROUTE
app.post("/uploads", upload.single("file"), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  if (req.file.mimetype === "text/plain") {
    res.sendFile(path.join(__dirname, "public", "file-uploaded.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "file-error.html"));
  }
});

// ROUTE TO UPLOAD
app.get("/file-upload", (req, res) => {
  res.sendFile(path.join(__dirname + "/" + "file-upload.html"));
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening at Port ${port}`);
});
