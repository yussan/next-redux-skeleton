import { withIronSession } from "next-iron-session";
import SessionConf from "../../config/sessionConf";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const DummyLogin = [
  {
    username: "user",
    password: "123",
    fullname: "user fullname",
  },
];

export default withIronSession(async (req, res) => {
  const { method } = req;
  let response = {};

  if (method === "POST") {
    // get formdata
    const { username, password } = JSON.parse(req.body);

    //check is available in dummy login
    const userData = DummyLogin.find((n) => {
      console.log("n", n, username, password);
      return n.password === password && n.username === username;
    });

    if (userData) {
      // save to session
      delete userData.password;
      req.session.set("session", userData);
      await req.session.save();

      // generate response
      response = {
        status: 200,
        message: "Login success",
        data: userData,
      };
    } else {
      response = {
        status: 401,
        message: "Wrong Username and Password",
        data: userData,
      };
    }
  } else {
    response = {
      status: 404,
      message: "Endpoint not available",
    };
  }

  res.status = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify(response));
}, SessionConf);
