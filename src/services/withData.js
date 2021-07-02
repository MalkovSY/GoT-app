// import React, {Component} from 'react';
// import Spinner from '../components/spinner';
// import PropTypes from 'prop-types';

// const withData = (View, props) => {
//     return class extends Component {

//         state = {
//             data: null
//         }
    
//         static defaultProps = {
//             onItemSelected: () => {}
//         }
        
//         static protoType = {
//             onItemSelected: PropTypes.func
//         }
    
//         componentDidMount() {
//             const getData = props.getData;
//             getData()
//                 .then((data) => {
//                     this.setState({
//                         data
//                     });
//                 })
//         }

//         render() {
//             const {data} = this.state;

//             if(!data) {
//              return <Spinner/>
//             }

//             return <View {...this.props} data={data}/>
//         }
//     }
// }

// export default withData;
//Тест работы с HOC