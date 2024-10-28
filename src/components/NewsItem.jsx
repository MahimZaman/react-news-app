import placeholder from "../assets/placeholder.jpg";

export const NewsItem = ({title, desc, author, image, url}) => {
  return (
    <div className="card bg-dark" style={{maxWidth:"345px"}}>
      <img src={image ? image : placeholder} className="card-img-top" alt={title} style={{
        width: "100%",
        height: "250px",
        objectFit: "cover"
      }} />
      <div className="card-body text-light">
        <h5 className="card-title">{title.slice(0, 50) + "..."}</h5>
        <p className="card-text">
          {desc ? desc.slice(0, 60) + "..." : 'Sorry no excerpt available.'}
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};
