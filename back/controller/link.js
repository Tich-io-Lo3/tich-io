const db = require("../model");
const { Op } = require("sequelize");

module.exports = {
  get_all: (req, res, next) => {
    return db.Link.findAll(
      {
        where: {
          UserId: {
            [Op.eq]: req.params.user_id,
          },
        },
      }
        .then((links) => res.json(links))
        .catch(next)
    );
  },
  create: (req, res, next) => {
    return db.Link.create(req.body)
      .then((links) => res.json(links))
      .catch(next);
  },
  update_by_id: (req, res, next) => {
    return db.Link.findByPk(req.params.link_id)
      .then((link) => {
        if (!link) {
          throw { status: 404, message: "Requested MailAddress not found" };
        }
        Object.assign(link, req.body);
        return link.save();
      })
      .then((links) => res.json(links))
      .catch(next);
  },
  delete_by_id: (req, res, next) => {
    return db.Link.findByPk(req.params.link_id)
      .then((link) => {
        if (!link) {
          throw { status: 404, message: "Requested MailAddress not found" };
        }
        Object.assign(link, req.body);
        return link.destroy();
      })
      .then((links) => res.status(200).end())
      .catch(next);
  },
};
