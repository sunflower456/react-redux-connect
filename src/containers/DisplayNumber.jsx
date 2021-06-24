import DispayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';
function mapReduxStateToProps(state){
    return {
        number : state.number
    }
}
export default connect(mapReduxStateToProps)(DispayNumber);

// export default class extends Component{
//     state = {number : store.getState().number}
    
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number : store.getState().number});
//         }.bind(this));
//     }

//     render(){
//         return (
//             <DispayNumber number={this.state.number}></DispayNumber>
//         )
//     }
// }