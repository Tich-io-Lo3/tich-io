module.export = {
  get_all: (req, res, next) => {
    return req.user
      .getLinks({
        order: ["service"],
      })
      .then((links) => res.json(links))
      .catch(next);
  },
  get_all_by_label: (req, res, next) => {
    return req.user
      .getLinks({
        where: { service: req.params.service },
      })
      .then((links) => res.json(links))
      .catch(next);
  },
  get_by_id: (req, res, next) => {
    return req.user
      .getLinks({
        where: {
          id: req.params.link_id,
        },
      })
      .then((links) => {
        if (links.length === 0) {
          throw { status: 404, message: "Requested link not found" };
        }
        return res.json(links[0]);
      })
      .catch(next);
  },
  create: (req, res, next) => {
    return req.user
      .createLink(req.body)
      .then((links) => res.json(links))
      .catch(next);
  },
  update_by_id: (req, res, next) => {
    return req.user
      .getLinks({
        where: {
          id: req.params.link_id,
        },
      })
      .then((links) => {
        if (links.length === 0) {
          throw { status: 404, message: "Requested MailAddress not found" };
        }
        Object.assign(links[0], req.body);
        return links[0].save();
      })
      .then((links) => res.json(links))
      .catch(next);
  },
  delete_by_id: (req, res, next) => {
    return req.user
      .getLinks({
        where: {
          id: req.params.link_id,
        },
      })
      .then((links) => {
        if (links.length === 0) {
          throw { status: 404, message: "Requested link not found" };
        }
        return links[0].destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
  },
};
