import React, { useState } from 'react';
import { FriendItem } from './FriendItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';


const Friends = (props) => {
    const [listFriends, setlistFriends] = useState([
        // {firstName: "Social", lastName: "Network", id: "0"} 
    ]);
    const [addNew, setAddNew] = useState(false);
//const l = [{id: "1", firstName: "Linda", lastName: "Sea"}, {id: "2", firstName: "Lana", lastName: "Su"}];
    // const list = l.map((friend) =>
    // <li key={friend.id}>
    //   {friend.firstName} {friend.lastName}
    // </li>

// const list = listFriends.map((friend) =>
// <li key={friend.id}>
//   {friend.firstName} {friend.lastName}
// </li>
//   );

   

    const onAddFriendClick = () => {
        // this.friends.push(friendItem);
        // debugger;
        setAddNew(true);
        console.log('add new item');
    }

    const onDeleteFriend = (friendItem) => {
        
        const newListFriends = listFriends.filter(friend => friend.id !== friendItem.id);
    setlistFriends(newListFriends);
        console.log('delete friend')
        setAddNew(false);
    
    }

    const onAddFriend = (friendItem) => {
        debugger;
        const inList = listFriends.filter(friend => friend.id === friendItem.id);
        if(inList[0] !== undefined){
            alert("this friend is already added");
            
        }else{
            const newListFriends = [...listFriends, friendItem];
            setlistFriends(newListFriends);
                console.log('add friend', friendItem);
                setAddNew(false);
        }
       
       
    }

    return (
        <div>
            {addNew && <FriendItem onApprove={onAddFriend} onDelete={onDeleteFriend}/>}
            <Button variant="contained" color="primary" onClick={onAddFriendClick}>Add new friend</Button>
    <ul>{listFriends.map((friend) =>
<ListItemText key={friend.id}>
  {friend.firstName} {friend.lastName}
</ListItemText>)}</ul>
    {/* <p>{listFriends}</p> */}
        {/*    TODO: output all friends */}
        {/*    TODO: create component FriendItem, rename FriendItem -> FriendItemEdit */}
        </div>
    );
}

export default Friends;
