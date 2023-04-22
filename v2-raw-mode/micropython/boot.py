# boot.py -- run on boot-up
try:
  import usocket as socket
except:
  import socket

import network
from sh1106 import *
# from camconnect import howmanyip
import esp
esp.osdebug(None)

import gc
gc.collect()

ssid = 'Freddy Boiii'
password = 'Something'

ap = network.WLAN(network.AP_IF)
# ap.config(essid="<AP_NAME>", authmode=network.AUTH_WPA_WPA2_PSK, password="<password>")
ap.config(essid=ssid, authmode=network.AUTH_WPA_WPA2_PSK,password=password)
ap.config(max_clients=5)
ap.active(True)

while ap.active() == False:
  pass

print("soham here")
print('Connection successful23')
listofips = ap.ifconfig()
print(listofips)
# def web_page():
#   html = """<html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head>
#   <body><h1>Hello, World!</h1></body></html>"""
#   return html

# s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# s.bind(('', 80))
# s.listen(5)
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
webrepl.start(password="anton")

print(type(listofips[0]))

show_ip(listofips[0])

# howmanyip(ap)
