import css from './Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <h2>Task Profile</h2>
      <div className={css.container}>
        <div className={css.profile}>
          <img src={image} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{name}</p>
          <p className={css.info}>@{tag}</p>
          <p className={css.info}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.status}>Followers</span>
            <span className={css.text}>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.status}>Views</span>
            <span className={css.text}>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.status}>Likes</span>
            <span className={css.text}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
