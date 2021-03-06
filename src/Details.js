import {Component} from "react";
import {withRouter} from "react-router-dom"

class Details extends Component{
    constructor() {
        super();

        this.state = { loading: true }
    }
    async componentDidMount(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )
        const json = await res.json()
        this.setState(
            Object.assign(
                {
                    loading: false
                },
                json.pets[0]
            )
        )
    }
    render () {
        console.log(this.state)
        return <h2>hi there!</h2>
    }
}

export default withRouter(Details)