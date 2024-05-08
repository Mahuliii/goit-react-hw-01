import Profile from './Profile';
import userData from '../userData.json';

export default function App() {
  return (
    <div>
      <h1>Homework React 1</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
