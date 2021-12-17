module.export = {
  get_all: (req, res, next) => {
    return req.game
      .getImages({})
      .then((images) => res.json(images))
      .catch(next);
  },
  get_by_id: (req, res, next) => {
    return req.user
      .getImages({
        where: {
          id: req.params.image_id,
        },
      })
      .then((images) => {
        if (images.length === 0) {
          throw { status: 404, message: "Requested link not found" };
        }
        return res.json(images[0]);
      })
      .catch(next);
  },
  create: (req, res, next) => {
    return req.game
      .createImage(req.body)
      .then((image) => res.json(image))
      .catch(next);
  },
  update_by_id: (req, res, next) => {
    return req.game
      .getImages({
        where: {
          id: req.params.image_id,
        },
      })
      .then((images) => {
        if (images.length === 0) {
          throw { status: 404, message: "Requested images not found" };
        }
        Object.assign(images[0], req.body);
        return images[0].save();
      })
      .then((images) => res.json(images))
      .catch(next);
  },
  delete_by_id: (req, res, next) => {
    return req.game
      .getImages({
        where: {
          id: req.params.image_id,
        },
      })
      .then((images) => {
        if (images.length === 0) {
          throw { status: 404, message: "Requested images not found" };
        }
        return images[0].destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
  },
};
