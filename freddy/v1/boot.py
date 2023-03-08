# boot.py -- run on boot-up
try:
  import usocket as socket
except:
  import socket

import network
from sh1106 import *
import esp
esp.osdebug(None)

import gc
gc.collect()

ssid = 'Freddy Boiii'
password = 'Something'

ap = network.WLAN(network.AP_IF)
ap.active(True)
ap.config(essid=ssid, password=password)

while ap.active() == False:
  pass

print('Connection successful')
list_ip = ap.ifconfig()

def show_ip(ipaddress):
  from machine import SoftI2C,Pin
  sda=Pin(21)
  scl=Pin(22)
  i2c=SoftI2C(sda=sda,scl=scl,freq=400000)
  display = SH1106_I2C(128, 64, i2c, Pin(16), 0x3c)
  display.sleep(False)
  display.fill(0)
  display.text('Connect to Freddy Boii Wifi', 0, 0, 1)
  display.text('Put the following IP Address in the box', 0, 10, 1)
  display.text(ipaddress,0,20,1)
  display.show()


import webrepl

webrepl.start(password="freddy")

print(type(list_ip[0]))

show_ip(list_ip[0])
