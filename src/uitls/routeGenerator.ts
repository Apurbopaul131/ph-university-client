import { TRouteItem, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]): TRouteItem[] => {
  const adminRoutes = items.reduce((acc: TRouteItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    } else if (item.children) {
      item.children.forEach((el) => {
        acc.push({
          path: el.path,
          element: el.element,
        });
      });
    }
    return acc;
  }, []);
  return adminRoutes;
};
