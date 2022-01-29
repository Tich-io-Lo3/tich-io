const user_ctrl = require("../controller/user");
module.exports = [
  {
    url: "/users",
    method: "get",
    func: () => "hello wordl",
  },
  {
    url: "/user/:user_id",
    method: "delete",
    func: user_ctrl.delete_by_id,
  },
  {
    url: "/user",
    method: "post",
    func: user_ctrl.create,
  },
  {
    url: "/user/:user_id",
    method: "put",
    func: user_ctrl.update_by_id,
  },
];
