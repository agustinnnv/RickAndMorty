import { Link } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from '../../Redux/Action/Actions';
import { useEffect, useState } from 'react';



export default function Card(props) {
  const { 
    id, 
    name, 
    status, 
    species, 
    gender, 
    origin, 
    image, 
    onClose
   } = props;

const { myFavorites } = useSelector((state) => state);
  const [isFav, setIsFav] = useState(false)
const dispatch = useDispatch();

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
     dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
     
    }
  }
  useEffect(() => {
   myFavorites.forEach((fav) => {
      if(fav.id === props.id) {
        setIsFav(true);
      }
    })
    }, [myFavorites])
  
    function superClose(){
      onClose(id);
      dispatch(removeFav(id));
    }


  return (
    <div>
      {
        isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }
      <button onClick={superClose}>X</button>

      <Link  className="link" to={`/detail/${id}`}>
        <h2>{name} </h2>
      </Link>
      <h2>{name}</h2>
      <h2>{species} </h2>
      <h2>{gender} </h2>
      <h2>{status} </h2>
      <h2>{origin} </h2>
      <h2></h2>
      <img src={image} alt='imagen' />
    </div>
  );
}
// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites
//   }
// }
// function mapDispatchToProp(dispatch) {
//   return {
//     addFav: (ch) => dispatch(addFav(ch)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }



// export default connect(mapStateToProps, mapDispatchToProp)(Card)