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

interface ILinksHeaderProps {
  grandparent: grandparent;
  parent: parent;
  childName: string;
}

const LinksHeader: FC<ILinksHeaderProps> = ({
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

export default LinksHeader;
