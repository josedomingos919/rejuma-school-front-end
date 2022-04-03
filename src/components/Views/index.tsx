import { menuItems } from "../LeftMenu/util";

export const Views = () => {
  const selectedPathName = window.location.pathname;

  for (let item of menuItems) {
    if (item.pathName === selectedPathName) return <>{item?.view}</>;

    for (let clild of item.children ?? []) {
      if (clild.pathName === selectedPathName) return <>{clild.view}</>;
    }
  }

  return <>Nenhuma View encontrada!</>;
};
