const moongose=require('mongoose')
const app= require("./app")
const port=process.env.PORT ||3000
const mongo_URI=process.env.mongo_URI ||"mongodb://localhost:27017/learning_mern"
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));