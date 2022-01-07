const user_ctrl = require("../controller/user");
const link_ctrl = require("../controller/link");
module.export = [
  {
    url: "/user/:user_id/link",
    method: "get",
    func: [user_ctrl.load_by_id, link_ctrl.get_all_by_user_id],
  },
  {
    url: "/user/:user_id/link/:link_id",
    method: "get",
    func: [user_ctrl.load_by_id, link_ctrl.get_by_id],
  },
  {
    url: "/user/:user_id/link",
    method: "post",
    func: [user_ctrl.load_by_id, link_ctrl.create],
  },
  {
    url: "/user/:user_id/link/:link_id",
    method: "put",
    func: [user_ctrl.load_by_id, link_ctrl.update_by_id],
  },
  {
    url: "/user/:user_id/link/:link_id",
    method: "get",
    func: [user_ctrl.load_by_id, link_ctrl.delete_by_id],
  },
];
