var createImage = function(src, title) {
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img; 
};

// array of images
var images = [];

// push two images to the array
images.push(createImage("foo.jpg", "foo title"));
images.push(createImage("bar.jpg", "bar title"));


// output
console.log(images);