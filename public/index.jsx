(function (root, factory) {
  var dependencyName = "CheckboxWithLabel";
  var moduleName = "mainModule";
  if (typeof define === 'function' && define.amd) {
    define([dependencyName], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require(dependencyName));
  } else {
    root[moduleName] = factory(root[dependencyName]);
  }
}(window, function(CheckboxWithLabel) {
  return ReactDOM.render(
    <CheckboxWithLabel labelOn="On" labelOff="Off"/>,
    document.getElementById('container')
  );
}));