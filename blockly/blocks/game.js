'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.game');

goog.require('Blockly.Blocks');

Blockly.Blocks.game.HUE = 190;

Blockly.Blocks.game.cat_picture_image = filepath.media + '/cat_picture.jpg';

Blockly.Blocks['game_cat_picture'] = {
  init: function() {
    this.setColour(Blockly.Blocks.game.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.game.cat_picture_image, 64, 46))
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.GAME_CAT_PICTURE_TOOLTIP);
  }
};

Blockly.Blocks['remote_setup'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.REMOTE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_COLOR)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.REMOTE_STYLE_Straight, "直式"],
        [Blockly.Msg.REMOTE_STYLE_Horizontal, "橫式"]
      ]), "TYPE");
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_TITLE)
    this.appendValueInput("NAME")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.REMOTE_NAME);
    this.appendValueInput("ROW")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.REMOTE_ROW);
    this.appendValueInput("COL")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.REMOTE_COL);
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.REMOTE_TOOLTIP);
  }
};

Blockly.Blocks['remote_deploy'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField(Blockly.Msg.REMOTE_NAME);
    this.appendValueInput("position_col")
      .setCheck("Number")
      .appendField(Blockly.Msg.REMOTE_POSITION_COL);
    this.appendValueInput("position_row")
      .setCheck("Number")
      .appendField(Blockly.Msg.REMOTE_POSITION_ROW);
    this.appendValueInput("size_col")
      .setCheck("Number")
      .appendField(Blockly.Msg.REMOTE_SIZE_COL);
    this.appendValueInput("size_row")
      .setCheck("Number")
      .appendField(Blockly.Msg.REMOTE_SIZE_ROW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOTE_COLOR)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_STRING_Orange, "Orange"],
        [Blockly.Msg.VARIABLES_TYPE_STRING_blue, "blue"],
        [Blockly.Msg.VARIABLES_TYPE_STRING_green, "green"],
        [Blockly.Msg.VARIABLES_TYPE_STRING_Pink, "Pink"],
        [Blockly.Msg.VARIABLES_TYPE_STRING_gray, "gray"],
        [Blockly.Msg.VARIABLES_TYPE_STRING_yellow, "yellow"]
      ]), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
  }
};