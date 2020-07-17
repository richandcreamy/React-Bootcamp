class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Let's go for a spin!</h1>
                <Slot />
                <Slot />
                <Slot />
                <Slot />
                <Slot />
                <Slot />
                <Slot />
                <Slot />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))