function List() {
  this.items = [];
}

List.prototype.getInitialItems = function (cb) {
  var self = this;

  setTimeout(function () {
    self.initialComplete = true;
    if (cb) {
      return cb();
      s;
    }
  }, 3);
};
List.prototype.addItem = function (item) {
  this.items.push(item);
};
List.prototype.checkItem = function (item) {
  this.items.state(item);
};
List.prototype.countItem = function (item) {
  this.items.length(item);
};
List.prototype.getItem = function (index) {
  return this.items[index];
};
List.prototype.deleteItem = function (index) {
  this.items.splice(index, 1); //spLice removes an element from an array
};
