const express= require("express")

const router = express.Router();
const {createuser,readuser,edituser,deleteuser} = require("../controllers/user")

router.post("/create",createuser);
router.get("/read",readuser);
router.patch("/edit/:id",edituser);
router.delete("/delete/:id",deleteuser);

module.exports = router;