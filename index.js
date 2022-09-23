
const url="ws://192.168.4.1:8266"
const start_but = document.getElementById("Start");
start_but.disabled=true
const socket = new WebSocket(url)
socket.binaryType = 'arraybuffer';
var count=0;
let code=""
let lastmes="";
let linesofcode=[]
socket.addEventListener('message', (event) => {
    if(count==0){
      console.log('Message from server ', event.data);
      socket.send("freddy\x0D")
      count++;
    }else{
      console.log('Message from server ', event.data);
      lastmes = event.data;
      count++;
    }
});

Blockly.defineBlocksWithJsonArray(
    [{
        "type": "print_text",
        "message0": "Text You Want To Display %1",
        "args0": [
          {
            "type": "field_input",
            "name": "Text String",
            "text": ""
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 105,
        "tooltip": "",
        "helpUrl": ""
      }
    ]
);

Blockly.Python['print_text'] = function(block) {
  var text_text_string = block.getFieldValue('Text String');
  // TODO: Assemble JavaScript into code variable.
  var code = `from sh1106 import *
  from machine import SoftI2C,Pin
  sda=Pin(21)
  scl=Pin(22)
  i2c=SoftI2C(sda=sda,scl=scl,freq=400000)
  display = SH1106_I2C(128, 64, i2c, Pin(16), 0x3c)
  display.sleep(False)
  display.fill(0)
  display.text('${text_text_string}', 0, 0, 1)
  display.show();`
  
  return code;
};
var toolbox = {
        "kind": "categoryToolbox",
        "contents": [
          {
            "kind": "category",
            "name": "Control",
            "contents": [
              {
                "kind": "block",
                "type": "controls_if"
              },
            ]
          },
          {
            "kind": "category",
            "name": "Logic",
            "contents": [
              {
                "kind": "block",
                "type": "logic_compare"
              },
              {
                "kind": "block",
                "type": "logic_operation"
              },
              {
                "kind": "block",
                "type": "logic_boolean"
              }
            ]
          },
          {
            "kind":"category",
            "name":"Display",
            "contents":[
              {
                "kind":"block",
                "type":"print_text"
  
              }
            ]
  
          }
        ]
    }


    var workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });

    function myUpdateFunction(event) {
      start_but.disabled=false
      var code = Blockly.Python.workspaceToCode(workspace);
      document.getElementById('textarea').value = code;
      linesofcode = code.split("\n")
    //   if(code!=""){

    //       linesofcode[linesofcode.length]=code.split("\n")
    //       console.log(linesofcode[0])
    //       // for (let i = 0; i < linesofcode.length; i++) {
    //       //   linesofcode [i]= linesofcode[i].trimStart();
    //       // }
        
    // }

    }
  workspace.addChangeListener(myUpdateFunction);


start_but.addEventListener("click",()=>{
  var enter_val="\x0D"
  for (let i = 0; i < linesofcode.length; i++) {
    linesofcode[i] = linesofcode[i].trim()
    linesofcode[i]= linesofcode[i].concat(enter_val);
  }
  for (let i = 0; i < linesofcode.length ; i++) {
    socket.send(linesofcode[i])
  }
})
