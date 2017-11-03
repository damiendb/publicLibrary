function Book( slots) {
  this.isbn = slots.isbn;
  this.title = slots.title;
  this.author - slots.author;
  this.year = slots.year;
  this.getFullTitle: function () {
  	return this.title + " written by " + this.author;
  }
};
