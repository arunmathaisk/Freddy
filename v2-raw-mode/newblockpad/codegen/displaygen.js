
Blockly.Python['init_display'] = function(block) {
  var text_text_string = block.getFieldValue('Text String');
  // TODO: Assemble JavaScript into code variable.
  var code = `from display import *\n`
  return code;
};
Blockly.Python['print_text'] = function(block) {
    var text_text_string = block.getFieldValue('Text String');
    // TODO: Assemble JavaScript into code variable.
    var code = `displaytext("${text_text_string}")\n`
    return code;
  };

  Blockly.Python['display_text_left'] = function(block) {
    var text = block.getFieldValue('display_text');
    var realtext = Blockly.Python.valueToCode(block, text, Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `displaytext("${text}")\n`
    return [code,Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['display_varible'] = function(block) {
    var value_code = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `displaytext(str(${value_code}))\n`
    return code;
  };