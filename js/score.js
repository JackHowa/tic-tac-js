class Score extends React.Component {
	render() {
			return (<p>{this.props.winner} Wins!</p>);
	}
}

ReactDOM.render(
	<Score winner="X" />,
	document.getElementById('score')
);