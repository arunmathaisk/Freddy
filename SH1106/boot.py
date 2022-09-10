# boot.py -- run on boot-up
import network
import time 
sta_if=network.WLAN(network.STA_IF)
sta_if.active(True)
# time.sleep(5)
sta_if.connect("arunmathisk.in","thematrix")
import webrepl
webrepl.start()

print(sta_if.ifconfig())