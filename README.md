# threedraw

this is a small node server using express and socket.io. you can start it with 
`node index.js`. however, you should change the `localhost` in `draw.html` to 
point to the IP of the Node instance, or your clients won't get a socket.io 
connection.

once the server is up, connect to it through a browser and start drawing. many 
people can draw at once. you can rotate the environment with the left/right 
keys, and go forward/backward in the z-plane with the up/down keys.

unfortunately, there's only one room to draw in, and you can only clear it by 
restarting the server. also, other peoples' scribbles don't show up until you 
draw something yourself.

I made this for the first UVic Hackathing on 04. Nov. 2017. there are many
awkward or hard to use features, in the spirit of the competition.
