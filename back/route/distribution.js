const distribution_ctrl = require("../controller/distribution");
const game_ctrl = require("../controller/game");
module.exports = [
  {
    url: "/game/:game_id/distributions",
    method: "get",
    func: [distribution_ctrl.get_all],
  },
  {
    url: "/game/:game_id/distribution/:distribution_os",
    method: "get",
    func: [distribution_ctrl.get_by_os],
  },
  {
    url: "/game/:game_id/distribution",
    method: "post",
    func: [distribution_ctrl.create],
  },
  {
    url: "/game/:game_id/distribution/:distribution_id",
    method: "put",
    func: [distribution_ctrl.update_by_id],
  },
  {
    url: "/game/:game_id/distribution/:distribution_id",
    method: "delete",
    func: [distribution_ctrl.delete_by_id],
  },
];
