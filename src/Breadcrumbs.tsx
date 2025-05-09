import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { RouteObject, useLocation } from "react-router"
// import { pathsLables } from "./utils/utils";
import "./Breadcrumbs.css";
import { Link, useLoaderData } from "react-router";

interface BreadCrumbsInterface {
  items?: { path: string; label: string }[];
  // items: T[],
}
// import { useRoutes } from "react-router";
export default function BreadCrumbs({ items }: BreadCrumbsInterface) {
  const routeData = useLoaderData();
  // console.log(routeData);
  const crumbs = items ? [...routeData, ...items] : [...routeData];

  return (
    <ul className="breadcrumbs">
      {crumbs.map((item, index, array) => {
        return (
          <li key={index}>
            {index === array.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <>
                {item.path.length > 0 ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
                <FontAwesomeIcon icon={faChevronRight} />
              </>
            )}
          </li>
        );
      })}
      {/* <li>
        Профиль
        <FontAwesomeIcon icon={faChevronRight} />
      </li>
      <li>
        Новый курс
        <FontAwesomeIcon icon={faChevronRight} />
      </li> */}

      {/* {handlers.map((handler) => {
                const params = handler.params;
                console.log(params);
                return <li>
                </li>
            })} */}
      {/* {crumbs.map((path) => {
                return <li key={path.path}>
                    <span>{path.label}</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
            })} */}
    </ul>
  );
}
