import React from 'react'

// export class Settings extends React.PureComponent {
//     render() {
//       const loading = (<div>I'm Loading</div>);
//       let content = [];
//       let pushMessages = null;
//       let emailMessages = null;
  
//       if (this.props.pushPreferences) {
//          pushMessages = (<div>Push Content Here</div>);
//       }
//       if (this.props.emailPreferences) {
//         emailMessages = (<div>Email Content Here</div>);
//       }
  
//       // Push the components in the order I want
//       if (emailMessages) content.push(emailMessages);
//       if (pushMessages) content.push(pushMessages);
  
//       return (
//         <div>
//           {content.length ? content : loading}
//         </div>
//           )
//   }



const Coments = (props) => {

    const loading = (<div>I'm Loading</div>);
    let content = [];
    let pushMessages = null;
    let emailMessages = null;

    if (props.pushPreferences) {
       pushMessages = (<div>Push Content Here</div>);
    }
    if (props.emailPreferences) {
      emailMessages = (<div>Email Content Here</div>);
    }

    // Push the components in the order I want
    if (emailMessages) content.push(emailMessages);
    if (pushMessages) content.push(pushMessages);

    return (
        <div>
          {content.length ? content : loading}
        </div>
    )
}

export default Coments;