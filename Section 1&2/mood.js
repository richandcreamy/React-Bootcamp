const getMood = () => {
    const moods = ['😅', '😭', '😂', '😎', '🔥', '💪'];
    return moods[Math.floor(Math.random() * moods.length)]
} 

class Mood extends React.Component {
    render(){
        return (
            <div>
                <h3>My Current Mood Is: {getMood()}</h3>
            </div>
        );
    }
}