import users from '../../users.json';
import { useState } from 'react';
import './list.scss';

const fixedData = users.map((data, index) => ({ id: `${index + 1}`, ...data }));

const ListSingle = ({ name, age, location, photo }) => {
  const [likes, setLikes] = useState(0);

  const likesBtn = () => setLikes(likes + 1);
  return (
    <>
      <div className="list_bio">
        <h2>{name}</h2>
        <p>📍{location}</p>
        <button onClick={likesBtn}>❤️{likes}</button>
      </div>

      <div className="list_photo">
        <span>{age}</span>
        <img src={photo} alt={name} />
      </div>
    </>
  );
};

const ListGroup = () => {
  const [data, setData] = useState(fixedData.slice(0, 5));

  const remover = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const reseting = () => {
    const randomized = [...fixedData] // copy array
      .sort(() => Math.random() - 0.5) // shuffle
      .slice(0, 5); // take 5
    setData(randomized);
  };

  return (
    <>
      {data.length === 0 ? (
        <div className="msg_reset">
          <h1>You're missing connection</h1>{' '}
          <button className="btn_reset" onClick={reseting}>
            set me a new chic
          </button>
        </div>
      ) : (
        <ul className="list_group">
          {data.map(({ name, id, photo, age, location }) => (
            <li className="list_single" key={id}>
              <ListSingle
                name={name}
                photo={photo.replace('/women', '/images')}
                age={age}
                location={location}
              />
              <button onClick={() => remover(id)}>remove me honey</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
