function Train() {

let color = 255;

let red = Math.floor(Math.random()*color);
let green = Math.floor(Math.random()*color);
let blue = Math.floor(Math.random()*color);

document.querySelector('.bg').style.background = `rgb(${red},${green},${blue})`;

/*let element = document.querySelector('.bg');
let bgColor = window.getComputedStyle(element).backgroundColor;

// Use a regular expression to extract RGB values
let rgb = bgColor.match(/\d+/g);

let red = parseInt(rgb[0], 10);
let green = parseInt(rgb[1], 10);
let blue = parseInt(rgb[2], 10);*/

let network = new brain.NeuralNetwork();
network.train(
[
  { "input": { "r": 0, "g": 0, "b": 0 }, "output": { "white": 1 } },
  { "input": { "r": 255, "g": 255, "b": 255 }, "output": { "black": 1 } },
  { "input": { "r": 255, "g": 0, "b": 0 }, "output": { "white": 1 } },
  { "input": { "r": 0, "g": 255, "b": 0 }, "output": { "black": 1 } },
  { "input": { "r": 0, "g": 0, "b": 255 }, "output": { "white": 1 } },
  { "input": { "r": 200, "g": 200, "b": 200 }, "output": { "black": 1 } },
  { "input": { "r": 50, "g": 50, "b": 50 }, "output": { "white": 1 } },
  { "input": { "r": 100, "g": 100, "b": 100 }, "output": { "white": 1 } },
  { "input": { "r": 180, "g": 180, "b": 180 }, "output": { "black": 1 } },
  { "input": { "r": 20, "g": 120, "b": 220 }, "output": { "white": 1 } },
  { "input": { "r": 240, "g": 240, "b": 240 }, "output": { "black": 1 } },
  { "input": { "r": 15, "g": 15, "b": 15 }, "output": { "white": 1 } },
  { "input": { "r": 255, "g": 200, "b": 0 }, "output": { "black": 1 } },
  { "input": { "r": 10, "g": 100, "b": 150 }, "output": { "white": 1 } },
  { "input": { "r": 210, "g": 180, "b": 140 }, "output": { "black": 1 } },
  { "input": { "r": 80, "g": 0, "b": 80 }, "output": { "white": 1 } },
  { "input": { "r": 220, "g": 20, "b": 60 }, "output": { "black": 1 } },
  { "input": { "r": 30, "g": 144, "b": 255 }, "output": { "white": 1 } },
  { "input": { "r": 245, "g": 245, "b": 220 }, "output": { "black": 1 } },
  { "input": { "r": 100, "g": 149, "b": 237 }, "output": { "white": 1 } },
  { "input": { "r": 60, "g": 60, "b": 60 }, "output": { "white": 1 } },
  { "input": { "r": 250, "g": 250, "b": 250 }, "output": { "black": 1 } },
  { "input": { "r": 90, "g": 20, "b": 20 }, "output": { "white": 1 } },
  { "input": { "r": 200, "g": 230, "b": 201 }, "output": { "black": 1 } },
  { "input": { "r": 35, "g": 35, "b": 142 }, "output": { "white": 1 } },
  { "input": { "r": 255, "g": 182, "b": 193 }, "output": { "black": 1 } },
  { "input": { "r": 25, "g": 25, "b": 25 }, "output": { "white": 1 } },
  { "input": { "r": 245, "g": 222, "b": 179 }, "output": { "black": 1 } },
  { "input": { "r": 0, "g": 100, "b": 0 }, "output": { "white": 1 } },
  { "input": { "r": 255, "g": 255, "b": 240 }, "output": { "black": 1 } }
]

)

var output = network.run({
	r:red,
	b:green,
	g:blue
})

var text = output.white>output.black?"white": "black"; document.querySelector('.bg').style.color = text;
console.log(output)
console.log(color)
}