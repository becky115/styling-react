import React, { Component } from 'react';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

class App extends Component {
  render() {
  	return (
		<div>
			<Button>버튼</Button>
			<StyledButton>StyledButton</StyledButton>
			<StyledButton big>StyledButton</StyledButton>
			<StyledButton big={true}>StyledButton</StyledButton>
		</div>
    )
  }
}

export default App;
