// ui

let workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });
let play_button = document.getElementById("play")
play_button.onclick = function(){
  let code =  Blockly.Python.workspaceToCode(workspace);
  console.log(code)
  sendcodetest(code)
  execute()
}

// injection of blockly




// checking how many times 
let nooftimes = localStorage.getItem("noofvisted")