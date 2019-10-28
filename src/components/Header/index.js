import React from 'react';
import './style.css';

function Header(props) {
	return (
		<header className="header">
			<div>
				<h1 className="title">Click Game with React</h1>
			</div>
			<div>
				<h1 className="subtitle">Select Only New Images!</h1>
			</div>
      <div>
				<h1 className="subtitle">If you select any duplicates images, score will reset</h1>
			</div>
      <div className="scoreDiv">Score: {props.score}</div>
		</header>
	);
}

export default Header;

/* <div>
		<h1 className="title">{props.children}</h1>
</div> */