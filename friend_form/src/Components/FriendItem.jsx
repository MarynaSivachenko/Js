import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export const FriendItem = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onApprove = () => {
        props.onApprove({ firstName, lastName, id: (firstName + lastName) });
    }

    const onDelete = () => {
        props.onDelete({ firstName, lastName, id: (firstName + lastName) });
    }

    const handleFieldChange = (event, setValue) => {
        const value = event.target.value;
        setValue(value);
    }

   

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
                    onChange={(event) => handleFieldChange(event, setLastName)} />
                <Button variant="contained" color="primary" onClick={onDelete}>Delete</Button>
                <Button variant="contained" color="primary" onClick={onApprove}> Approve</Button>
            </div>
        </form>
    );

}

export const GetListFriend = (friendItem) => {
    return (
        <div>
            <li>{friendItem.firstName} {friendItem.lastName}</li>
        </div>
        );
}
 
