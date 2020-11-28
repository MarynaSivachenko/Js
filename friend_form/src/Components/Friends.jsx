import React, { useState } from 'react';
import { FriendItem } from './FriendItem';


const Friends = (props) => {
    const friends = [];
    const [addNew, setAddNew] = useState(false);

    const onAddFriendClick = () => {
        // this.friends.push(friendItem);
        setAddNew(true);
        console.log('add new item');
    }

    const onDeleteFriend = (friendItem) => {
        console.log('delete friend')
        // this.friends.forEach(function (item, i, friends) {
        //     if (friends[i].firstName == friendItem.firstName && friends[i].lastName == friendItem.lastName) {
        //         friends.splice(i - 1, 1);
        //     }
        // });
    }

    const onAddFriend = (friendItem) => {
        friends.push(friendItem);
        console.log('add friend', friendItem);
        setAddNew(false);
        // this.friends.forEach(function (item, i, friends) {
        //     if (friends[i].firstName == friendItem.firstName && friends[i].lastName == friendItem.lastName) {
        //         friends.splice(i - 1, 1);
        //     }
        // });
    }

    return (
        <div>
            {addNew && <FriendItem onApprove={onAddFriend} onDelete={onDeleteFriend}/>}
            <button onClick={onAddFriendClick}>Add new friend</button>

        {/*    TODO: output all friends */}
        {/*    TODO: create component FriendItem, rename FriendItem -> FriendItemEdit */}
        </div>
    );
}

export default Friends;
