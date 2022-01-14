const db = require('../models');
const { Op } = require('sequelize');
module.exports = {
  get_all_by_user_id: (req, res, next) => {
    return db.Library.findAll({
      where: { userId: { [Op.eq]: req.body.user_id } },
    })
      .then((games) => res.json(games))
      .catch(next);
  },
  get_all_by_game_id: (req, res, next) => {
    return db.Library.findAll({
      where: { gameId: { [Op.eq]: req.body.game_id } },
    })
      .then((games) => res.json(games))
      .catch(next);
  },
  create: (req, res, next) => {
    return db.Library.create(req.body)
      .createLibrary(req.body)
      .then((library) => res.json(library))
      .catch(next);
  },
  delete_by_id: (req, res, next) => {
    return db.Library.findAll({
      where: {
        userId: { [Op.eq]: req.body.user_id },
        gameId: { [Op.eq]: req.body.game_id },
      },
    })
      .then((library) => {
        if (!library) {
          throw { status: 404, message: 'Game not found for this player' };
        }
        return library.destroy();
      })
      .then(() => res.status(200).end().catch(next));
  },
};
