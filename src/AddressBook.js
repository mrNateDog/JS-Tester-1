function List() {
  this.contacts = [];
}

List.prototype.getInitialcontacts = function (cb) {
  var self = this;

  setTimeout(function () {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
};
List.prototype.addContact = function (contact) {
  this.contacts.push(contact);
};

List.prototype.getContact = function (index) {
  return this.contacts[index];
};
List.prototype.deleteContact = function (index) {
  this.contacts.splice(index, 1); //spLice removes an element from an array
};
