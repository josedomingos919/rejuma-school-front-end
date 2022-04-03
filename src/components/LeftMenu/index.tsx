import {
  ButtonContainer,
  Container,
  ContainerChildren,
  FooterConteiner,
  Image,
  ImageCard,
  ImageContainer,
  ImageContent,
  LabelUserLevel,
  LabelUserName,
  LogoContainer,
  UserImage,
} from "./styles";

import Logo from "./../../assets/icon/logo2.jpg";
import { menuItems } from "./util";
import { ButtonMenu } from "../ButtonMenu";
import { useState } from "react";

export const LeftMenu = () => {
  const userImage = `https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg`;
  const [activeMenu, __setActiveMenu] = useState({
    menu: 0,
    submenu: 0,
  });

  const setActiveMenu = (data = {}) => {
    __setActiveMenu((prevState) => ({ ...prevState, ...data }));
  };

  const handleSelectMenu = ({ menu = 0, submenu = 0 }) => {
    setActiveMenu({ menu, submenu });
  };

  return (
    <Container>
      <LogoContainer>
        <Image src={Logo} alt="Logo" />
      </LogoContainer>
      <ButtonContainer>
        {menuItems.map(({ title, children, icon = <></> }, index) => (
          <>
            <ButtonMenu
              onPress={() =>
                handleSelectMenu({
                  menu: index,
                })
              }
              isDown={index === activeMenu?.menu}
              label={title}
              icon={icon}
              hasChildren={children ? true : false}
            />

            {activeMenu?.menu === index && (
              <ContainerChildren>
                {children?.map(({ title, icon = <></> }, index_) => (
                  <ButtonMenu
                    isDown={index_ === activeMenu?.submenu}
                    onPress={() =>
                      handleSelectMenu({
                        menu: index,
                        submenu: index_,
                      })
                    }
                    label={title}
                    icon={icon}
                  />
                ))}
              </ContainerChildren>
            )}
          </>
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
