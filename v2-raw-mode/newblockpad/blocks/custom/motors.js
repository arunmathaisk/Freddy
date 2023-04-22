let motor_init_motors=      {
    "type": "init_motors",
    "message0": "Start Motors",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
let motor_halt_motor = {
    "type": "halt_motors",
    "lastDummyAlign0": "CENTRE",
    "message0": "Halt the Motors",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  }
let motor_move_block = {
    "type": "move_motors",
    "message0": "Move :  %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "direction",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  }