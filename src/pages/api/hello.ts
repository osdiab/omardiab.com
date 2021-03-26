import { NextApiHandler } from "next";
import { init as sentryInit } from "src/utility/sentry";

sentryInit();

const Hello: NextApiHandler = (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

export default Hello;
