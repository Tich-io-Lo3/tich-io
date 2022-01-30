const user_ctrl = require("../controller/user");
const game_ctrl = require("../controller/game");
const library_ctrl = require("../controller/library");
module.exports = [
  {
    url: "/user/:user_id/games",
    method: "get",
    func: [user_ctrl.load_by_id, library_ctrl.get_all_by_user_id],
  },
  {
    url: "/user/:user_id/game",
    method: "post",
    func: [user_ctrl.load_by_id, library_ctrl.create],
  },
  //TODO
  /*   {
    url: "/game/:game_id/users",
    method: "get",
    func: [game_ctrl.load_by_id, library_ctrl],
  }, */
  {
    url: "/user/:user_id/game/:game_id",
    method: "delete",
    func: [user_ctrl.load_by_id, library_ctrl.delete_by_id],
  },
];
