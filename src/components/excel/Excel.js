export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    $root.textContent = 'test';
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
