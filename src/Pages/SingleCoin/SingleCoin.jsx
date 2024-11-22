import { useParams } from "react-router-dom";

function SingleCoin (){
   const {id} = useParams()
return(
    <>
{id}    </>
)
}
export default SingleCoin ;