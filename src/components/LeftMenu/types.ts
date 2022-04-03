export interface Props {}

export type MenuItemsProps = {
  title: string;
  icon?: JSX.Element;
  onClick?: () => void;
  pathName?: string;
  view?: JSX.Element;
  children?: Array<MenuItemsProps>;
};
