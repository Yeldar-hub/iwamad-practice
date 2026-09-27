import { useState } from 'react';
import myAvatar from '../assets/avatar.jpg'; 


type LinkItem = {
  id: number;
  label: string;
  url: string;
};

type ProfileCardProps = {
  name: string;
  description: string;
  links: LinkItem[]; 
};

function LinkBadge(props: { link: LinkItem }) {
  return (
    <div>
    <a href={props.link.url} target="_blank" rel="noreferrer">
      {props.link.label}
    </a>
    </div>
  );
}

function ProfileCard(props: ProfileCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked); 
  }

  let linksContent;
  if (props.links.length === 0) {
    linksContent = <p>No links available</p>;
  } else {
    linksContent = props.links.map(function(item) {
      return <LinkBadge key={item.id} link={item} />;
    });
  }

  return (
    <main>
      <section className="card">
        <img src={myAvatar} alt="Avatar" className="avatar-img" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>

        <div className="links">
          {linksContent}
        </div>

        <button
          id="likeButton"
          onClick={handleLikeClick}
          style={{ 
            backgroundColor: isLiked ? '#22c55e' : '#3b82f6', 
            color: 'white' 
          }}
        >
          {isLiked ? 'Liked ❤️' : 'Like ❤️'}
        </button>
      </section>
    </main>
  );
}

export default ProfileCard;
