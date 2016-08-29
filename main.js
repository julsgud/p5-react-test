import React from 'react';
import ReactDOM from 'react-dom';

let sketch = function(p) {
	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight);
	}

	p.draw = function() {
		p.background(55, 110);
		p.noStroke();
		p.fill(255);
		p.ellipse(p.mouseX, p.mouseY, 80, 80);
	}
};

class App extends React.Component {
	render() {
		return <div></div>
	}

	componentDidMount() {
		let myp5 = new p5(sketch);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));