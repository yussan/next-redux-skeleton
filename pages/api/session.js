import { withIronSession } from "next-iron-session";
import SessionConf from "../../config/sessionConf";

const SessionMiddleware = withIronSession(async (req, res) => {
  const userdata = req.session.get("session");
  let response = {};
  if (userdata) {
    response = {
      status: 200,
      data: userdata,
    };
  } else {
    response = {
      status: 204,
      data: null,
    };
  }

  return res.json(response);
}, SessionConf);

export default SessionMiddleware;
