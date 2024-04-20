import { Nabla } from "next/font/google";
import Link from "next/link";
// import styles from "./navbar.module.css"

function Navbar(props) {
    return (
        <div style={{display: "flex", justifyContent: "right", backgroundColor: "#82aef5", height: "10vh", width: "100vw"}}>
            <a style={{width: "10%", display: "table", textAlign: "center"}} href="/">
                <span style={{display: "table-cell", verticalAlign: "middle"}}>About</span></a>
            <a style={{width: "10%", display: "table", textAlign: "center"}} href="/login"><span style={{display: "table-cell", verticalAlign: "middle"}}>Log In</span></a>
            <a style={{width: "10%", display: "table", textAlign: "center"}} href="/signup"><span style={{display: "table-cell", verticalAlign: "middle"}}>Sign Up</span></a>
        </div>
    )
}

export { Navbar }

