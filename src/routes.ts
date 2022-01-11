export interface NavigationRoute {
  title: string;
  path: string;
  subRoutes?: NavigationRoute[];
}

export const routes: NavigationRoute[] = [
  {
    title: "O nama",
    path: "/o-nama",
  },
  {
    title: "Proizvodi",
    path: "/proizvodi",
    subRoutes: [
      {
        title: "Torte",
        path: "/proizvodi?filter=torte",
      },
      {
        title: "Kolači",
        path: "/proizvodi?filter=kolaci",
      },
      {
        title: "Slani Proizvodi",
        path: "/proizvodi?filter=slano",
      },
    ],
  },
  {
    title: "Kontakt",
    path: "/kontakt",
  },
];
