const nodemeiler = require("nodemailer");

const transporter = nodemeiler.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "",
    pass: "",
  },
});

for (let i = 0; i < 5; i++) {
  transporter
    .sendMail({
      from: "Gabriel Série A",
      to: "jlima0500@gmail.com",
      subject: "Email automatizado enviado pelo NodeJS",
      text: "-",
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
}
