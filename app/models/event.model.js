module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      location: String,
      peoples: Number,
      time: String,
      date: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Events = mongoose.model("events", schema);
  return Events;
};
