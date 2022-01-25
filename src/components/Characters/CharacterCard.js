import classes from './CharacterCard.module.css';

const CharacterCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.footer}>
        <div className={classes.title}>
          {props.name}
        </div>
        <button>Add</button>
      </div>
    </div>);
};

export default CharacterCard;
