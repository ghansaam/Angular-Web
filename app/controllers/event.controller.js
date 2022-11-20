const db = require("../models");
const Events = db.tutorials;

// Create and Save a new Event
exports.create = (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.location) {
 
    res.status(400).send({ message: "Content can not be empty!," });

    return;
  }

  // Create a Event
  const event = new Events({
    location: req.body.location,
    time: req.body.time,
    peoples:req.body.peoples,
    date: req.body.date 
  });

  // Save Event in the database
  event
    .save(event)
    .then(data => {
      console.log("data",data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating theEvent"
      });
      res.status(400).send({
        message:
          err.message || "Some error occurred while creating theEvent"
      });
    });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  const location = req.query.location;
  var condition = location ? { title: { $regex: new RegExp(location), $options: "i" } } : {};

  Events.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events"
      });
    });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Events.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Event with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Event with id=" + id });
    });
};

// Update a Event by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Events.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found!`
        });
      } else res.send({ message: "Event was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Event with id=" + id
      });
    });
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Events.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
        });
      } else {
        res.send({
          message: "Event was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id
      });
    });
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Events.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Events were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Events"
      });
    });
};

// Find all published Events
exports.findAllPublished = (req, res) => {
  Events.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events"
      });
    });
};
