import React from "react";
import Card from "../Card/Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { orderCharacter, filterCharacter, removeFav, reset} from "../../Redux/Action/Actions";


export default function Favorites({  onClose  }) {
    const { myFavorites } =useSelector((state) => state)
    const dispatch = useDispatch();
   
    function closeFavorite(id) {
        onClose(id);
        dispatch(removeFav(id));
    }
    function handlerOrder(event) {
        event.preventDefault();
      const { name, value } = event.target
        dispatch(orderCharacter(value));
    }
    function handlerFilter(event) {
        event.preventDefault();
        const { name, value } = event.target
          dispatch(filterCharacter(value));
    }
    function resetBtton(){
        dispatch(reset())
    }
    return (


        <div>
            <select onChange={handlerOrder} name="order" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disable>Select order</option>
                <option value="Ascendente" disable>Ascendente </option>
                <option value="Descendente" disable> Descendente</option>
            </select>
            <select onChange={handlerFilter} name="filter" defaultValue={"DEFAULT"}>
                <option value="Default" disable>Select Filter</option> 
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <button onClick={resetBtton} >Reset</button>
        

            {myFavorites &&
                myFavorites.map((element, index) => {
                    return (
                        <Card
                            key={index}
                            id={element.id}
                            name={element.name}
                            origin={element.origin.name}
                            image={element.image}
                            onClose={() => closeFavorite(element.id)}
                            removeFav={removeFav}
                            myFavorites={myFavorites}
                        >
                        </Card>
                    )
                }
                )}
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         myFavorites: state.myFavorites
//     }
// }
// function mapDispatch(dispatch) {
//     return {
//         removeFav: (id) => dispatch(removeFav(id))
//     }
// }
// export default connect(mapStateToProps, mapDispatch)(Favorites);*/ }