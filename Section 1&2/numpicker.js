const getNum = () => {
    return Math.floor(Math.random() * 10) +1
}

class NumPicker extends React.Component {
    render() {
        const num = getNum()
        let msg
        if(num === 1){
            msg = "Critical Fail"
        }
        return (
            <div>
            <h1>Your number is {num}</h1>
            <p>{num === 7 ? 'Lucky!' : 'Unlucky!'}</p>
            {num === 7 ? <img src="https://media.giphy.com/media/RMMvyF6DMG0Hhg0los/giphy.gif"/> : null}
            {msg}
            </div>
            )
    }
}
