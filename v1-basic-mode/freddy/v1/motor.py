from machine import Pin

p1 = Pin(18)
p2 = Pin(19)
p3 = Pin(12)
p4 = Pin(13)

def initialize_motors():
    p1 = Pin(18,Pin.OUT)
    p2 = Pin(19,Pin.OUT)
    p3 = Pin(12,Pin.OUT)
    p4 = Pin(13,Pin.OUT)


def halt():
    p1.value(0)
    p2.value(0)
    p3.value(0)
    p4.value(0)

def forward():
    p1.value(0)
    p2.value(1)
    p3.value(1)
    p4.value(0)

def backward():
    p1.value(1)
    p2.value(0)
    p3.value(0)
    p4.value(1)

def left():
    p1.value(0)
    p2.value(1)
    p3.value(0)
    p4.value(0)

def right():
    p1.value(0)
    p2.value(0)
    p3.value(1)
    p4.value(0)

#left 
# p2 is one

#right 
# p3 is one

# reeverse
# p1 is one p4 is one


