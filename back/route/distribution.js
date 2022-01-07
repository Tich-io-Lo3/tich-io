const distribution_ctrl = require("../controller/distribution");
const game_ctrl = require("../controller/game");
module.exports = [
  {
    url: "/game/:game_id/distributions",
    method: "get",
    func: [game_ctrl.load_by_id, distribution_ctrl.get_all],
  },
  {
    url: "/game/:game_id/distribution/:distribution_id",
    method: "get",
    func: [game_ctrl.load_by_id, distribution_ctrl.get_by_id],
  },
  {
    url: "/game/:game_id/distribution",
    method: "post",
    func: [game_ctrl.load_by_id, distribution_ctrl.create],
  },
  {
    url: "/game/:game_id/distribution/:distribution_id",
    method: "put",
    func: [game_ctrl.load_by_id, distribution_ctrl.update_by_id],
  },
  {
    url: "/game/:game_id/distribution/:distribution_id",
    method: "delete",
    func: [game_ctrl.load_by_id, distribution_ctrl.delete_by_id],
  },
];
