const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
router.post("/search", (req,res)=> {
  console.log("you're searching for ", req.body.title);

  //connect to google books api, and use term to search for some books. send back to frontend;
  res.json([{title:"dummy"}])
})

router.post("/saved", (req,res)=> {
  console.log("you're searching for ", req.body.title);

  //connect to google books api, and use term to search for some books. send back to frontend;
  res.json([{title:"dummy"}])
})
module.exports = router;
