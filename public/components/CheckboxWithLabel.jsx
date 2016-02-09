(function (root, factory) {
  var dependencyName = "React";
  var moduleName = "CheckboxWithLabel";
  if (typeof define === 'function' && define.amd) {
    define([dependencyName], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require(dependencyName));
  } else {
    root[moduleName] = factory(root[dependencyName]);
  }
}(window, function(React) {
  return React.createClass({
    getInitialState: function() {
      return { isChecked: false };
    },
    onChange: function() {
      this.setState({isChecked: !this.state.isChecked})
    },
    render: function() {
      return (
        <div>
          <input 
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
            ></input>
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff }
        </div>
      )
    }
  });
}));
