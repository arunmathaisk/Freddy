Blockly.Python["init_motors"] = function(block){
    var code = `from motor import *\ninitialize_motors()\n`
    return code;
  }
  Blockly.Python['halt_motors'] = function(block){
    var code =`halt()\n`
  return code
  }
  Blockly.Python["move_motors"] = function(block){
    var code = "\n";
    var direction = block.getFieldValue("direction");
    code = `${direction}()\n`
    return code
  }