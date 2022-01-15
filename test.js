







let blog = {
  title: 'First Blog',
  published: false,
  tags: ['nature', 'travel', 'wanderlust'],
  show: function () {
    this.tags.forEach( function(tag) {
      console.log(this.title, tag); // undefined 'nature'
      console.log(this); // Window
    });
  }
}

blog.show();









