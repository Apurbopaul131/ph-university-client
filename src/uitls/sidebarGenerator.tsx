import { NavLink } from "react-router";
import { TSidebarItem, TUserPath } from "../types";

const sidebarGenerator = (itmes: TUserPath[], role: string): TSidebarItem[] => {
  const sidebarItems = itmes.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((el) => {
          return {
            key: el.name,
            label: <NavLink to={`/admin/${el.path}`}>{el.name}</NavLink>,
          };
        }),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
export default sidebarGenerator;
