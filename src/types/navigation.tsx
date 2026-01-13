export interface NavPage {
  label: string;
  path: string;
}

export const NAV_PAGES: NavPage[] = [
  { label: "Home", path: "/" },
  { label: "Hospitals", path: "/hospitals" },
  { label: "Doctors", path: "/doctors" },
];
