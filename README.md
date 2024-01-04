# Bowling_game_Score
Calculate the score of a bowling game - TypeScript

## The objective is to create a program that scores an arbitrary 10-pin bowling game, 
and the final test will be the game set included in the instructions, 
which has the following roll scores: 1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6.



# Scoring Bowling.

The game consists of 10 frames as shown above. In each frame the player has
two opportunities to knock down 10 pins. The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.
A spare is when the player knocks down all 10 pins in two tries. The bonus for
that frame is the number of pins knocked down by the next roll. So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)
A strike is when the player knocks down all 10 pins on his first try. The bonus
for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame. However no more than three balls can be rolled in
tenth frame.

# The Requirements.

+ roll(pins : int)
+ score() : int
Game

• Write a class named “Game” that has two
methods
– roll(pins : int) is called each time the player
rolls a ball. The argument is the number of
pins knocked down.
– score() : int is called only at the very end of
the game. It returns the total score for that
game.
