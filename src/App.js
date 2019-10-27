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
		characters
	};

	
	removeCharacter = (id) => {
		// TODO: think I should add function call in here and setState( { NEW-Variable }
		// Filter this.state.characters for characters with an id not equal to the id being removed
		const characters = this.state.characters.filter((character) => character.id !== id);
		// Set this.state.characters equal to the new characters array
		this.setState({ characters });
	};

	render () {
		return (
			<Wrapper>
				<Title>Select Only New Images!</Title>
				<Title>Goodluck!</Title>
				{this.state.characters.map((character) => (
					<Image
						removeCharacter={this.removeCharacter}
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
