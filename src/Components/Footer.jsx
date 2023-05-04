import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="copyright">
                &copy; Copyright <strong><span>MonicIO</span></strong>. Все права защищены (нет)
            </div>
            <div className="credits">
                Разработано <NavLink to="https://github.com/PostBeer/">PostBeerTeam</NavLink>
            </div>
        </footer>
    );
};