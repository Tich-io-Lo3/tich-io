const user_ctrl = require("../controller/user");
const link_ctrl = require("../controller/link");
module.exports = [
  {
    url: "/user/:user_id/link",
    method: "get",
    func: [link_ctrl.get_all],
  },
  {
    url: "/user/:user_id/link",
    method: "post",
    func: [link_ctrl.create],
  },
  {
    url: "/user/:user_id/link/:link_id",
    method: "put",
    func: [link_ctrl.update_by_id],
  },
  {
    url: "/user/:user_id/link/:link_id",
    method: "get",
    func: [link_ctrl.delete_by_id],
  },
];
