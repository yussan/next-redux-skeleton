import formidable from "formidable";

const bodyParserMiddleware = (req, res) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();

    return form.parse(req, (err, fields, files) => {
      if (err) {
        console.log("formidable error", err);
        res.json({
          status: 500,
          message: "Error parsing on formidable",
        });
        resolve({ err });
      } else {
        resolve({ fields, files });
      }
    });
  });
};

export default bodyParserMiddleware;
