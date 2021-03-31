import React, { Component } from 'react'
import '../css/footer.css';

export class Footer extends Component {

     constructor(props) {
          super(props)
          this.state = {
                
          }
     }
     render() {
          return (
               <div >
                <footer className="footer">
                     <span className="text-muted">All right reserved 2020 @Hotel Swan Inn</span>
                     </footer>    
               </div>
          )
     }
}

export default Footer