import React, {Component} from 'react';
import 'flexboxgrid';

class Navbar extends React.Component{
    render(){
 return(
     <div id='navbar'>
         <ul id="nav" className='row center-xs middle-xs'>
             <li className='col-xs-2'><a href="#FingerFood">Finger Food</a></li>
             <li className='col-xs-2'><a href="#Snacks">Snacks</a></li>
             <li className='col-xs-2'><a href="#Create">Create</a></li>
             <li className='col-xs-2'><a href="#Desserts">Desserts</a></li>
             <
                 
                 
                 li className='col-xs-2'><a href="#Drinks">Drinks</a></li>
         </ul>
     </div>
 )

    }
}

export default Navbar;