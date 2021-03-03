import React from 'react';
import './style.css';
// class SearchField extends React.Component{
// 
//     state={inputValue:'' , complete :false};
//    //event handeler
//     inputChangeHandeler=(e)=>{
//         console.log(e.target.value);//e yek objectast e.target.value mahal zakhire sazi oon search ast
//         this.setState({inputValue:e.target.value})//dast resi be state
//         console.log(this.state.inputValue);
//     };
//     render(){
//         return(
//             <div>
//                 <input 
//                     type="text" 
//                     className="search"
//                     placeholder="search hear"//dakhelesh minevise
//                     onChange={this.inputChangeHandeler}//event handeler  yani har chengi ke etefagh miyofte in function inwok mishe
//                 />
//             </div>
//         );
//     } 
// };


const SearchField = (props)=>{
    //chon mikhastim ba component parent kar konim in be dard ma nmikhore
    // const inputChangeHandeler=(e)=>{
    //     console.log(e.target.value);//e yek objectast e.target.value mahal zakhire sazi oon search ast
    // }
    return(
        <div>
            <input 
                type="text" 
                className="search"
                placeholder="search hear"//dakhelesh minevise
                // onChange={inputChangeHandeler}//event handeler  yani har chengi ke etefagh miyofte in function inwok mishe
                onChange={props.onSearchChanged}
                />
        </div>
    );
};

export default SearchField;
