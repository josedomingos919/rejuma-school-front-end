import {
  ButtonContainer,
  Container,
  ContainerChildren,
  FooterConteiner,
  Image,
  ImageCard,
  ImageContainer,
  ImageContent,
  ItemContainer,
  LabelUserLevel,
  LabelUserName,
  LogoContainer,
  UserImage,
} from "./styles";

import Logo from "./../../assets/icon/logo2.jpg";
import { menuItems } from "./util";
import { ButtonMenu } from "../ButtonMenu";
import { useEffect, useState } from "react";

export const LeftMenu = () => {
  const userImage = `https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg`;
  const [activeMenu, __setActiveMenu] = useState({
    menu: -1,
    submenu: -1,
  });

  const setActiveMenu = (data = {}) => {
    __setActiveMenu((prevState) => ({ ...prevState, ...data }));
  };

  const handleSelectMenu = ({ menu = -1, submenu = -1 }) => {
    setActiveMenu({ menu, submenu });
  };

  const getPath = () => {
    const selectedPathName = window?.location?.pathname;

    let meunIndex = -1;
    let submenuIndex = -1;

    for (let i = 0; i < menuItems.length; i++) {
      let menu = menuItems[i];

      if (menu?.pathName === selectedPathName) meunIndex = i;

      for (let j = 0; j < (menu?.children?.length ?? 0); j++) {
        const item = menu?.children?.[j];
        if (item?.pathName === selectedPathName) submenuIndex = j;
      }

      if (meunIndex > -1) {
        handleSelectMenu({ menu: meunIndex, submenu: -1 });
        break;
      } else if (submenuIndex > -1) {
        handleSelectMenu({ menu: i, submenu: submenuIndex });
        break;
      }
    }
  };

  useEffect(() => {
    getPath();
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Image src={Logo} alt="Logo" />
      </LogoContainer>
      <ButtonContainer>
        {menuItems.map(({ pathName, title, children, icon = <>

            </>, onClick = () => {} }, index) => (
          <ItemContainer key={index + 0.5}>
            <ButtonMenu
              key={index + 0.3}
              onPress={() => {
                if (children && pathName) {
                  window.location.href = children?.[0]?.pathName ?? "";
                } else if (pathName) {
                  window.location.href = pathName;
                  return;
                }

                onClick();
              }}
              isDown={index === activeMenu?.menu}
              label={title}
              icon={icon}
              hasChildren={children ? true : false}
            />

            {activeMenu?.menu === index && (
              <ContainerChildren key={index + 0.2}>
                {children?.map(({ pathName, title, icon = <></> }, index_) => (
                  <ButtonMenu
                    key={index_ + 0.4}
                    isDown={index_ === activeMenu?.submenu}
                    onPress={() => {
                      if (pathName) window.location.href = pathName;
                    }}
                    label={title}
                    icon={icon}
                  />
                ))}
              </ContainerChildren>
            )}
          </ItemContainer>
        ))}
      </ButtonContainer>
      <FooterConteiner>
        <ImageContainer>
          <ImageCard>
            <UserImage src={userImage} />
          </ImageCard>
          <ImageContent>
            <LabelUserName>José Ndonge</LabelUserName>
            <LabelUserLevel>Professor</LabelUserLevel>
          </ImageContent>
        </ImageContainer>
      </FooterConteiner>
    </Container>
  );
};
