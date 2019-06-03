import db from "../models";

module.exports = function(app, model) {
  app.get(`/${model}s`, (req, res) => {
    db[model].findAll().then(data => {
      res.send({ error: false, data, message: `${model}s list.` });
    });
  });

  app.get(`/${model}/:id`, (req, res) => {
    const id = req.params.id;
    if (!id) {
      return res
        .status(400)
        .send({ error: true, message: `Please provide ${model} id` });
    }
    db[model].findByPk(id).then(model => {
      res.send({ error: false, data: model, message: `a ${model}` });
    });
  });

  app.post(`/${model}`, (req, res) => {
    const data_request = req.body[model];
    if (!data_request) {
      return res
        .status(400)
        .send({ error: true, message: `Please provide ${model}` });
    }
    db[model].create(data_request).then(m => {
      console.log(`New ${model} added: `, m.id);
      res.send({ error: false, data: m, message: `added ${model}` });
    });
  });

  app.put(`/${model}/:id`, (req, res) => {
    const id = req.params.id;
    const data_request = req.body[model];
    if (!id || !data_request) {
      return res.status(400).send({
        error: model,
        message: `Please provide ${model} and ${model} id`
      });
    }
    db[model]
      .update(data_request, {
        where: {
          id
        }
      })
      .then(m => {
        res.send({ error: false, data: m, message: `updated ${model}` });
      });
  });

  app.delete(`/${model}/:id`, (req, res) => {
    const id = req.params.id;
    if (!id) {
      return res
        .status(400)
        .send({ error: id, message: `Please provide ${model} id` });
    }
    db[model]
      .destroy({
        where: {
          id
        }
      })
      .then(m => {
        res.send({ error: false, data: m, message: `deleted ${model}` });
      });
  });
};
