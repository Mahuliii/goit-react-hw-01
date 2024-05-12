import clsx from 'clsx';
import css from './FriendList.module.css';
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" className={css.image} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.ofline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
