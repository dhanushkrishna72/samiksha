const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const path = require("path");

const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup transporter using Gmail and app password
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// POST endpoint to handle form submissions
app.post("/send", async (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: `"Samiksha Learning Solutions" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Welcome to Samiksha Learning Solutions!",
        html: `
      <h3>Hi there!</h3>
      <p>Thanks for showing interest. We’ll launch soon.</p>
      <p>📅 Launch Date: <strong>15th August 2025</strong></p>
      <p>📎 Attached is our brochure.</p>
      <br>
      <p>— Team Samiksha</p>
    `,
        attachments: [
            {
                filename: "Samiksha_Brochure.pdf",
                path: path.join(__dirname, "assets/documents/samikshaBrochure.pdf"),
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
