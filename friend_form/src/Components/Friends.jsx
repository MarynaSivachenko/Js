import React, { useState } from 'react';
import { FriendItem } from './FriendItem';
import { GetListFriend} from './FriendItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

const Friends = (props) => {
    const [listFriends, setlistFriends] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const onAddFriendClick = () => {
        setAddNew(true);
    }

    const onDeleteFriend = (friendItem) => {
        const newListFriends = listFriends.filter(friend => friend.id !== friendItem.id);
        setlistFriends(newListFriends);
        setAddNew(false);
    }

    const onAddFriend = (friendItem) => {
        const inList = listFriends.filter(friend => friend.id === friendItem.id);
        if (inList.length !== 0) {
            alert("this friend is already added");

        } else {
            const newListFriends = [...listFriends, friendItem];
            setlistFriends(newListFriends);
            setAddNew(false);
        }
    }

    return (
        <div>
            {addNew && <FriendItem onApprove={onAddFriend} onDelete={onDeleteFriend} />}
            <Button variant="contained" color="primary" onClick={onAddFriendClick}>Add new friend</Button>
            <ul>{listFriends.map((friend) =>
                // <getListFriend friendItem={friend} />)}
                <GetListFriend friendItem = {friend}> </GetListFriend>)
            }
                 {/* <ListItemText key={friend.id}>
                     {friend.firstName} {friend.lastName}
                 </ListItemText>)} */}
            </ul>
        </div>
    );
}

export default Friends;
