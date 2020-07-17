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


const spinSymbol = () => {
    const symbolList = ["🍏", "🍎", "🍋", "🍒", "🍓", "🍍"]
    return symbolList[Math.floor(Math.random() * symbolList.length)]
}

class App extends React.Component {
    render() {
        let s1 = spinSymbol()
        let s2 = spinSymbol()
        let s3 = spinSymbol()
        let winLose
        if (s1 === s2 && s2 === s3) {
            winLose = "A Winner Is You"
        } else {
        winLose = "Try Again"
        } 
        return (
            <div>
                <h1>Let's go for a spin!</h1>
                {s1} {s2} {s3}
                <br />
                {winLose}
                <Slot />
            </div>
        )
    }
}


class Slot extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.s1} {this.props.s2} {this.props.s3}</h1>
            </div>
            )
    }
}