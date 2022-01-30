const game_ctrl = require("../controller/game");
module.exports = [
  {
    url: "/games",
    method: "get",
    func: game_ctrl.get_all,
  },
  {
    url: "/game/:game_id",
    method: "get",
    func: game_ctrl.get_by_id,
  },
  {
    url: "/games/creator/creator_id",
    method: "get",
    func: game_ctrl.get_by_creator,
  },
  {
    url: "/game",
    method: "post",
    func: game_ctrl.create,
  },
  {
    url: "/game/:game_id",
    method: "delete",
    func: game_ctrl.delete_by_id,
  },
  {
    url: "/game/:game_id",
    method: "put",
    func: game_ctrl.update_by_id,
  },
];
