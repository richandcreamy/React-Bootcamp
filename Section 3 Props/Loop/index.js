class App extends React.Component {
    render() {
        return (
            <div>
                <Loop name="Elton" 
                hobbies={["Magic", "Boba", "Food"]} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))