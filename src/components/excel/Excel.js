export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    this.components.forEach((Component) => {
      const component = new Component();
      console.log(component);
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
