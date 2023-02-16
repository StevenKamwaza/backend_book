const express = require("express");
const path =require("path");

const app = express();
const PORT = 3000;

const myPostRouter = require("./routes/postItems");
const myGalleyRouter = require("./routes/galleryItems");
const myPartnerRouter = require("./routes/partnerItems");
const myVacancyRouter = require("./routes/vacancyItems");
const myCareerRouter = require("./routes/careerItems");
const myTestimonialsRouter = require("./routes/testimonialsItems");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/api/posts", myPostRouter);
app.use("/api/galley", myGalleyRouter);
app.use("/api/partners", myPartnerRouter);
app.use("/api/vacancies", myVacancyRouter);
app.use("/api/team", myCareerRouter);
app.use("/api/testimonials", myTestimonialsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(PORT, () => {
  console.log(`Api streaming at http://localhost:${PORT}`);
});