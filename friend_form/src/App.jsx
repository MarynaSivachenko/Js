import './App.css';
import React, { Component } from 'react';
import Friends from './Components/Friends';

class App extends Component {
    render() {
        return <Friends/>;
    }
}

// class Friends extends Component {
//     friends = [];
//
//
//     addFriend(friendItem) {
//         this.friends.push(FriendItem);
//     }
//
//     deleteFriend(friendItem) {
//         this.friends.forEach(function (item, i, friends) {
//             if (friends[i].firstName == friendItem.firstName && friends[i].lastName == friendItem.lastName) {
//                 friends.splice(i - 1, 1);
//             }
//         });
//     }
// }
//
// class FriendItem extends Component {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//
//         onApprove(friendItem)
//         {
//
//         }
//
//         onDelete(friendItem)
//         {
//
//         }
//     }
//
//     render() {
//         return (
//             <form>
//             </form>
//         //     <form>
//         //     Add friends
//         // <div>
//         // <input type = "text" name = "firstName" placeholder = "First name" />
//         //     <input type = "text" name = "lastName" placeholder = "First name" / >
//         //     <button onClick={onDelete}> Delete </button>
//         //     <button onClick = {onApprove} > Approve </button>
//         //     <br/>
//         //     <button>
//         //     Add friend
//         // </button>
//         // </div>
//         // </form>
//     )
//     }
// }

export default App;


