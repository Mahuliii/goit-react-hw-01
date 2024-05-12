import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div>
      <h2>Task FriendList</h2>
      <div className={css.container}>
        <ul className={css.list}>
          {friends.map(friend => (
            <li key={friend.id} className={css.item}>
              <FriendListItem friend={friend} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
