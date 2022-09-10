# main.py -- put your code here!

from sh1106 import *
from machine import SoftI2C,Pin
sda=Pin(21)
scl=Pin(22)
i2c=SoftI2C(sda=sda,scl=scl,freq=400000)
# display = sh1106.SH1106_I2C(width, height, i2c, None, address, rotate=0)
display = SH1106_I2C(128, 64, i2c, Pin(16), 0x3c)
print("Hello SH1106")
display.sleep(False)
display.fill(0)
display.text('Hello Arun', 0, 0, 1)
display.text('Hello Dhruv', 0, 10, 1)
display.text('By Soham And Anton',0,20,1)
display.text('With uPython',0,30,1)
display.show()