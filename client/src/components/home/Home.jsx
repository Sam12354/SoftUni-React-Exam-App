import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <header className="masthead">
            <img src="/images/header-bg.jpg" alt="Background" className="header-img" />
                <div className="container">
                    <div className="masthead-subheading">Welcome To Our Studio!</div>
                    <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                    <Link className="btn btn-primary btn-xl text-uppercase" to="/catalog">Tell Me More</Link>
                </div>
            </header>
        </>
    )
}