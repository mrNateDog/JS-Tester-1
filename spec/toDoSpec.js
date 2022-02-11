/*describe("Login Page");
it("Should be able to login", (done) => {
  component.Login().then((result) => {
    expect(result).toBe(true);
    done();
  });
});*/
describe("To Do List", function () {
  var toDoList;
  var thisItem;

  //Keep from having to dec variables each time
  beforeEach(function () {
    toDoList = new List();
    thisItem = new Item();
  });
  it("should be able to add an item", function () {
    toDoList.addItem(thisItem);

    expect(toDoList.getItem(0)).toBe(thisItem);
  });

  it("should be able to delete an item", function () {
    toDoList.addItem(thisItem);
    toDoList.deleteItem(0);

    expect(toDoList.getItem(0)).not.toBeDefined();
  });

  it("Should be able to check off an item"),
    function () {
      toDoList.checkItem(thisItem);
      //Item should be in a different state
      expect(toDoList.getItem(0)).toBe(true);
    };
  it("Should display how many items there are"),
    function () {
      toDoList.countItem(thisItem);
      //need toBe number of Item in List
      expect(toDoList.getItem(0)).toBe(true);
    };
});

describe("Async do do list", function () {
  var toDoList = new List();

  beforeEach(function (done) {
    //async call - write the code first, the come back to do this
    toDoList.getInitialItems(function () {
      done();
    });
  });
  it("should grab existing items", function (done) {
    expect(toDoList.initialComplete).toBe(true);
    done();
  });
});
