'use strict';

goog.provide('Blockly.Arduino.game');

goog.require('Blockly.Arduino');

Blockly.Arduino.game_cat_picture = function() {
  var code = 'cat';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.remote_setup = function () {
  var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || ''
  var col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_ATOMIC) || ''

  NAME = NAME.replace(/\"/g, "");

  var val = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var type = this.getFieldValue('TYPE');
  
  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");

  var code = branch;
  return code;
};


Blockly.Arduino.remote_deploy = function () {
  var position = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC) || ''
  var position_col = Blockly.Arduino.valueToCode(this, 'position_col', Blockly.Arduino.ORDER_ATOMIC) || ''
  var position_row = Blockly.Arduino.valueToCode(this, 'position_row', Blockly.Arduino.ORDER_ATOMIC) || ''
  var size_col = Blockly.Arduino.valueToCode(this, 'size_col', Blockly.Arduino.ORDER_ATOMIC) || ''
  var size_row = Blockly.Arduino.valueToCode(this, 'size_row', Blockly.Arduino.ORDER_ATOMIC) || ''
  
  var val = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var type = this.getFieldValue('TYPE');


  return;
};