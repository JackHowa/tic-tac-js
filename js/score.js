class Score extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      board: props.board
		};
		
    this.onClick = this.onClick.bind(this);
  }

	render() {
			return (<p>{this.props.winner} Wins!</p>);
	}
}


ReactDOM.render(
	<Score winner="X" board={document.getElementById('js-whole-board')} />,
	document.getElementById('score')
);