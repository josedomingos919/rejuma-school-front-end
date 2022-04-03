export interface Props {}

export type MenuItemsProps = {
  title: string;
  icon?: JSX.Element;
  children?: Array<MenuItemsProps>;
  onClick?: () => void;
};
