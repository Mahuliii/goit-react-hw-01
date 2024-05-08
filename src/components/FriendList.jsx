import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div>
      <h2>Task FriendList</h2>
      <div>
        <ul>
          {friends.map(friend => (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
