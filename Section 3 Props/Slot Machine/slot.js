const spinSymbol = () => {
    const symbolList = ["🍏", "🍎", "🍋", "🍒", "🍓", "🍍"]
    return symbolList[Math.floor(Math.random() * symbolList.length)]
}


class Slot extends React.Component {
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
            <div className="Slot">
                <h1 style={{fontSize: '50px'}}>{s1} {s2} {s3}</h1>
                <h1>{winLose}</h1>
            </div>
            )
    }
}
