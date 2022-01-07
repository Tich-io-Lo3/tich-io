const db = require("../models");
module.export = {
  get_all: (req, res) => {
    return db.Game.findAll({}).then((games) => res.json(games));
  },
  delete_by_id: (req, res, next) => {
    return db.Game.findByPk(req.params.game_id)
      .then((game) => {
        if (!game) {
          throw { status: 404, message: "Requested Game not found" };
        }
        return game.destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
  },
  get_by_id: (req, res, next) => {
    return db.Game.findByPk(req.params.game_id)
      .then((game) => {
        if (!game) {
          throw { status: 404, message: "Requested Person not found" };
        }
        return res.json(game);
      })
      .catch(next);
  },
  create: (req, res, next) => {
    return db.Game.create(req.body)
      .then((game) => res.json(game))
      .catch(next);
  },
  update_by_id: (req, res, next) => {
    return db.Game.findByPk(req.params.group_id)
      .then((game) => {
        if (!game) {
          throw { status: 404, message: "Requested Game not found" };
        }
        Object.assign(game, req.body);
        return game.save();
      })
      .then((game) => res.json(game))
      .catch(next);
  },
};
