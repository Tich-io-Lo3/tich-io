const db = require("../model");

module.exports = {
  get_all: (req, res) => {
    return db.User.findAll({}).then((users) => res.json(users));
  },
  load_by_id: (req, res, next) => {
    return db.User.findByPk(req.params.user_id)
      .then((user) => {
        if (!user) {
          throw { status: 404, message: "Requested user not found" };
        }
        req.user = user;
        return next();
      })
      .catch(next);
  },

  delete_by_id: (req, res, next) => {
    return db.User.findByPk(req.params.user_id)
      .then((user) => {
        if (!user) {
          throw { status: 404, message: "Requested Person not found" };
        }
        return user.destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
  },
  get_by_id: (req, res, next) => {
    return db.User.findByPk(req.params.person_id)
      .then((user) => {
        if (!user) {
          throw { status: 404, message: "Requested Person not found" };
        }
        return res.json(user);
      })
      .catch(next);
  },
  create: (req, res, next) => {
    return db.User.create(req.body)
      .then((user) => res.json(user))
      .catch(next);
  },
  update_by_id: (req, res, next) => {
    return db.User.findByPk(req.params.group_id)
      .then((user) => {
        if (!user) {
          throw { status: 404, message: "Requested Person not found" };
        }
        Object.assign(user, req.body);
        return user.save();
      })
      .then((user) => res.json(user))
      .catch(next);
  },
};