interface cardProps {
  title: string;
  image: string;
  description: string;
}

const Card = ({ title, image, description }: cardProps) => {
  return (
    
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
