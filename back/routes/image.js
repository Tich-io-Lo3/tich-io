const image_ctrl = require('../controllers/image');
const game_ctrl = require('../controllers/game');
module.exports = [
  {
    url: '/game/:game_id/images',
    method: 'get',
    func: [game_ctrl.load_by_id, image_ctrl.get_all],
  },
  {
    url: '/game/:game_id/image/:image_id',
    method: 'get',
    func: [game_ctrl.load_by_id, image_ctrl.get_all],
  },
  {
    url: '/game/:game_id/image',
    method: 'post',
    func: [game_ctrl.load_by_id, image_ctrl.create],
  },
  {
    url: '/game/:game_id/image/:image_id',
    method: 'put',
    func: [game_ctrl.load_by_id, image_ctrl.update_by_id],
  },
  {
    url: '/game/:game_id/image/:image_id',
    method: 'get',
    func: [game_ctrl.load_by_id, image_ctrl.delete_by_id],
  },
];
