const ResCard = (props) => {
  return (
    <div className="res-card">
      <img src={props.imgUrl} width="100" height="100" className="res-image" />
      <h2>{props.name}</h2>
      <h3>{props.cuisine}</h3>
      <h4>{props.rating}*</h4>
    </div>
  );
};

export default ResCard;
