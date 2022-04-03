export interface Props {
  onPress?: () => void;
  label: string;
  icon: JSX.Element;
  hasChildren?: boolean;
  isDown?: boolean;
}

export type ButtonStyleProps = {
  isDown?: boolean;
};
