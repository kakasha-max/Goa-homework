from turtle import *

#we want to paint a house 


#step 1: draw a square
speed(30)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("yellow")
left(90)
forward(110)  #height of the door
right(90)
forward(60)
right(90)
forward(110)

penup()
goto(200, 200)
pendown()


color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
pendown()

begin_fill()
color("white")
right(290)
forward(30)

#window
color("black")
right(40)
forward(40)
right(190)
right(80)
forward(50)
right(90)
right(90)
right(90)
forward(40)
left(90)
forward(50)
right(180)
forward(50)
color("white")

forward(50)

color("black")
forward(50)
right(90)
forward(40)
right(90)
forward(50)
right(90)
forward(40)



exitonclick()
done()