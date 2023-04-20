import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  //console.log(location);
  let currentLink = "";
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <ul className="breadcrumbs">
      {crumbs.map((crumb, index) => {
        currentLink += `/${crumb}`;
        const isLast = index === crumbs.length - 1;
        return (
          <React.Fragment>
            {isLast ? (
              <li className="crumb" key={crumb}><NavLink className="crumb-link" key={crumb} to={currentLink}>
                {crumb}
              </NavLink></li>
            ) : (
              <li className="crumb" key={crumb}><Link className="crumb-link" key={crumb} to={currentLink}>
                {crumb}
              </Link></li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
