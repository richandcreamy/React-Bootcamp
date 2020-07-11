class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Hello2 />
                <NumPicker />
                <Mood />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))