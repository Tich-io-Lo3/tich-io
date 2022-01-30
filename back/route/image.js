const image_ctrl = require("../controller/image");
const game_ctrl = require("../controller/game");
module.exports = [
  {
    url: "/game/:game_id/images",
    method: "get",
    func: [image_ctrl.get_all],
  },
  // {
  //   url: "/game/:game_id/image",
  //   method: "post",
  //   func: [image_ctrl.create],
  // },
  {
    url: "/game/:game_id/image/:image_id",
    method: "get",
    func: [image_ctrl.delete_by_id],
  },
];
