import React, { Component } from 'react';
// import Form from "./components/Form";
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Image from './components/Image';
import characters from './characters.json';

console.log({ characters });

class App extends Component {
	// Setting this.state.friends to the characters json array
	state = {
		characters,
		score: 0
	};

	shuffle(characters) {
		for (let i = characters.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ characters[i], characters[j] ] = [ characters[j], characters[i] ];
		}
		return characters;
	}

	shuffleCharacters = (id) => {
		// TODO: think I should add function call in here and setState( { NEW-Variable }
		// Filter this.state.characters for characters with an id not equal to the id being removed
		// const characters = this.state.characters.filter((character) => character.id !== id);

		// add current id to keep score count
		const uniqueIds = [];

		

		// filter add to unique id if ||
		uniqueIds.push({id})

		// Shuffle Array
		this.shuffle(characters);
		// Set this.state.characters equal to the new characters array
		this.setState( { characters } );
		this.setState( { score: this.state.score + 1 } );
	};

	render() {
		return (
			<Wrapper>
				<Title>Select Only New Images!</Title>
				<Title>Goodluck!</Title>
				<Title>Score: {this.state.score}</Title>
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
