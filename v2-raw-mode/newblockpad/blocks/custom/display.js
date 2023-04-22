let display_init=      {
  "type": "init_display",
  "message0": "Display On",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
let display_block={
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
let display_block_left = {
  "type": "display_text_left",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "",
      "text": "Text To Display"
    },
    {
      "type": "field_input",
      "name": "display_text",
      "text": ""
    }
  ],
  "output": "Ary",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}

let display_var = {
  "type": "display_varible",
  "message0": "Display The Variable %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": "init_display",
  "nextStatement": null,
  "colour": 310,
  "tooltip": "",
  "helpUrl": ""
}

let display_coord = {
  "type": "display_with_cord",
  "message0": "Text You to want to display %1 %2 X Coordinate %3 Y Coordinate %4",
  "args0": [
    {
      "type": "field_input",
      "name": "Text String",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x_cord",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y_cord",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
}