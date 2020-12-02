import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export const FriendItem = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onApprove = () => {
        // TODO: set id
        debugger;
        props.onApprove({ firstName, lastName, id: (firstName + lastName) });
    }

    const onDelete = () => {
        // TODO: pass unique id to delete
        debugger;
        props.onDelete({ firstName, lastName, id: (firstName + lastName) });
    }

    const handleFieldChange = (event, setValue) => {
        const value = event.target.value;
        setValue(value);
    }

    {/*    TODO: use Material UI lib for components */}
    return (
        <form>
            <div>
                <Input
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    onChange={(event) => handleFieldChange(event, setFirstName)}
                />
                <Input
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    onChange={(event) => handleFieldChange(event, setLastName)}/>
                <Button variant="contained" color="primary" onClick={onDelete}>Delete</Button>
                <Button variant="contained" color="primary" onClick={onApprove}> Approve</Button>
            </div>
        </form>
    );
}

// class FriendItem extends Component {
//     FIRST_NAME_FIELD = 'firstName';
//     LAST_NAME_FIELD = 'lastName';
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: ''
//         }
//     }
//
//     handleFieldChange(event, fieldName) {
//         const value = event.target.value;
//         this.setState((state) => ({
//             ...state,
//             [fieldName]: value
//         }));
//     }
//
//     onApprove(friendItem) {
//         console.log(friendItem);
//     }
//
//     onDelete(friendItem) {
//         console.log(friendItem);
//     }
//
//     render() {
//         return <form>
//             <div>
//                 <input
//                     value={this.state.firstName}
//                     type="text"
//                     name="firstName"
//                     placeholder="First name"
//                     onChange={(event) => this.handleFieldChange(event, this.FIRST_NAME_FIELD)}
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="First name"
//                     onChange={(event) => this.handleFieldChange(event, this.LAST_NAME_FIELD)}/>
//                 <button onClick={this.onDelete}>Delete</button>
//                 <button onClick={this.onApprove}> Approve</button>
//             </div>
//         </form>;
//     }
// }
