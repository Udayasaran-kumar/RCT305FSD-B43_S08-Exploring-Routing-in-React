import {Link} from'react-router-dom'
function Users(){
    return(
        <div>
            <Link to={"/BOB"}>Bob</Link>

            <Link to={"/Alice"}>Alice</Link>
            <Link to={"/Charlie"}>Charlie</Link>
        </div>
    )
}
export default Users