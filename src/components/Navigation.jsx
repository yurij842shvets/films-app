import { Link } from "react-router-dom"

export default function Navigation() {
    return(
        <>
        <div style={{width: '100%', position: 'relative', borderBottom: '1px solid black', marginBottom: '20px'}}>
            <Link to='/' style={{marginRight: '20px'}}>Home</Link>
            <Link to='/movies'>Movies</Link>
        </div>

        </>

    )

}