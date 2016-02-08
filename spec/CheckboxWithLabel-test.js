jest.dontMock('../components/CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../components/CheckboxWithLabel');

describe('CheckboxWithLabel', function() {

  beforeEach(function() {
    this.checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    this.checkboxNode = ReactDOM.findDOMNode(this.checkbox);
  })
  
  it('is Off by default', function() {
    expect(this.checkboxNode.textContent).toEqual('Off');
  });

  it('changes the text after a click', function() {
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(this.checkbox, 'input')
    );
    expect(this.checkboxNode.textContent).toEqual('On');
  });

});