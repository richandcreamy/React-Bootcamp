class App extends React.Component {
    render() {
        return (
            <div>
            <Hello to="Richie" from="Vince" bangs={4}/>
            <Hello to="George" />
            <Hello to="Cherry" from="Travis" bangs={3} img="https://i2.wp.com/ss-burnout.com/wp-content/uploads/2014/09/teammixednuts_transparent.jpg?resize=1024%2C768&ssl=1"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))