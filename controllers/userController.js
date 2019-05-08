import db from '../models/index';

const userController = {};

userController.post = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  //Validations

  const user = new db.User({username, password});
  user.save()
    .then(newUser => res.json({
      success: true,
      data: newUser
    }))
    .catch(err => res.json({
      message: err
    }));
}

export default userController;
