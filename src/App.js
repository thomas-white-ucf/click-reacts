import React, { Component } from 'react';
// import Form from "./components/Form";
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Image from './components/Image';
import characters from './characters.json';


// console.log({ characters });

class App extends Component {
	// Setting this.state.friends to the characters json array
	state = {
		characters,
		selected: [ 499 ],
		score: 0
	};

	restartScore = () => {
		console.log('Game Over');
		this.setState({
			score: 0,
			selected: [ 499 ]
		});
		// this.setState({ selected: [ 499 ] });
		// return true
	};

	updateScore = (id) => {
		console.log('Unique id selected');
		this.setState({
			selected: this.state.selected.concat(id),
			score: this.state.score + 1
		});
		// this.setState({ score: this.state.score + 1 });
		// return true
	};

	checkMatches(id) {
		console.log('-- start checkMatches');
		console.log({ id });

		let roundSelected = this.state.selected;

		// add current id to keep Unique Selections only, if duplicate selected, Restart the Game
		roundSelected.forEach((item) => {
			if (item === id) {
				// * Lost Game - id selected already in array
				this.restartScore();
			} else {
				// * Update Score && Add the unique id to the array
				this.updateScore(id);
			}
		});

		console.log(this.state.selected);
	}

	shuffle = (characters) => {
		for (let i = characters.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ characters[i], characters[j] ] = [ characters[j], characters[i] ];
		}
		return characters;
	};

	shuffleCharacters = (id) => {
		// console.log({ id });

		// * Check if selection was aleady made
		// * Shuffle Array Character Cards, Increment Score
		// * Set this.state.characters equal to the new shuffled characters array
		this.checkMatches(id);
		this.shuffle(characters);
		this.setState({ characters });
	};

	render() {
		return (
			<Wrapper>
				<Header score={this.state.score}></Header>
				{this.state.characters.map((character) => (
					<Image
						shuffleCharacters={this.shuffleCharacters}
						id={character.id}
						key={character.id}
						name={character.name}
						image={character.image}
					/>
				))}
			</Wrapper>
		);
	}
}

export default App;
