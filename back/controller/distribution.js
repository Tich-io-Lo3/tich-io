module.export = {
  get_all: (req, res, next) => {
    return req.game
      .getDistributions({
        order: ["label"],
      })
      .then((distributions) => res.json(distributions))
      .catch(next);
  },
  get_all_by_label: (req, res, next) => {
    return req.game
      .getDistributions({
        where: { os: req.params.os },
      })
      .then((distribution) => res.json(distribution))
      .catch(next);
  },
  get_by_id: (req, res, next) => {
    return req.game
      .getDistributions({
        where: {
          id: req.params.distribution_id,
        },
      })
      .then((distribution) => {
        if (distribution.length === 0) {
          throw { status: 404, message: "Requested distribution not found" };
        }
        return res.json(distribution[0]);
      })
      .catch(next);
  },
  create: (req, res, next) => {
    return req.game
      .createDistribution(req.body)
      .then((distribution) => res.json(distribution))
      .catch(next);
  },
  update_by_id: (req, res, next) => {
    return req.user
      .getDistributions({
        where: {
          id: req.params.distribution_id,
        },
      })
      .then((distributions) => {
        if (distributions.length === 0) {
          throw { status: 404, message: "Requested distribution not found" };
        }
        Object.assign(distributions[0], req.body);
        return distributions[0].save();
      })
      .then((distributions) => res.json(distributions))
      .catch(next);
  },
  delete_by_id: (req, res, next) => {
    return req.user
      .getDistributions({
        where: {
          id: req.params.distribution_id,
        },
      })
      .then((distributions) => {
        if (distributions.length === 0) {
          throw { status: 404, message: "Requested link not found" };
        }
        return distributions[0].destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
  },
};
