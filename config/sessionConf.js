const SessionConf = {
  cookieName: "next-session-sample",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  password: "HoreLinkAjaKeren!MantabSejak2019",
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 1000 * 60 * 60 * 2, //2hours
};

export default SessionConf;
