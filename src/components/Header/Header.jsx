import { NavLink } from "react-router-dom";


export const Header = () => {
    return (
        <section>
            <div>
                <header>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/nannies">Nannies</NavLink>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </nav>
                </header>
            </div>
        </section>
    )
};