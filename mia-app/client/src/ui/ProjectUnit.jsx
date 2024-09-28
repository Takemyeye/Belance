export function ProjectUnit({ link, image, title, description, img }) {
  return (
    <div className="projects">
      <div className="wallpaper">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="description-projects">
        <div className="project-title">
          <h3>{title}</h3>
          <img src={img} alt="" />
        </div>
        <h4>{description}..</h4>
      </div>
    </div>
  );
};
