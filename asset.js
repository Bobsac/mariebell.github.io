AFRAME.registerComponent('hello-world', {
  schema: {
    message: {type: 'string', default: 'hoge'},
  },
  init: () => {
    console.log(this.data.message);
  }
});

AFRAME.registerComponent('cursor-listenr', {
  init: () => {
    let lastIndex = -1;
    let COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', (evt) => {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    })
  }
});