describe("Address Book", function () {
  var addressBook, thisContact;

  beforeEach(function () {
    //this was to keep from having to dec variables each time
    addressBook = new List();
    thisContact = new Contact();
  });
  it("should be able to add a contact", function () {
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("should be able to delete a contact", function () {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe("Async Address Book", function () {
  var addressBook = new List();

  beforeEach(function (done) {
    //async call - write the code first, the come back to do this
    addressBook.getInitialcontacts(function () {
      done();
    });
  });
  it("should grab initial contacts", function (done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
