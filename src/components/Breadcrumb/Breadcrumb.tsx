import { FC } from "react";
import { NavLink } from "react-router-dom";

interface grandparent {
  link: string;
  name: string;
}
interface parent {
  link: string;
  name: string;
}

interface IBreadcrumb {
  grandparent: grandparent;
  parent: parent;
  childName: string;
}

const Breadcrumb: FC<IBreadcrumb> = ({
  grandparent,
  parent,
  childName,
}) => {
  return (
    <div>
      <NavLink to={grandparent.link}>{grandparent.name}</NavLink> →
      <NavLink to={parent.link}>{parent.name}</NavLink> → {childName}
    </div>
  );
};

export default Breadcrumb;
