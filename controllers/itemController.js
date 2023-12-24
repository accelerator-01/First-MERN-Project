import Item, {
  find,
  findByIdAndUpdate,
  findOne,
  findByIdAndDelete,
} from "../models/Item";

export function get_items(req, res) {
  find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
}

export function post_item(req, res) {
  const newItem = new Item(req.body);
  newItem.save().then((item) => res.json(item));
}

export function update_item(req, res) {
  findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (item) {
    findOne({ _id: req.params.id }).then(function (item) {
      res.json(item);
    });
  });
}

export function delete_item(req, res) {
  findByIdAndDelete({ _id: req.params.id }).then(function (item) {
    res.json({ success: true });
  });
}
