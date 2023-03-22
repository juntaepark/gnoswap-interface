import styled from "@emotion/styled";
import mixins from "@/styles/mixins";

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 71px;
  background-color: ${({ theme }) => theme.colors.colorBlack};
  margin-bottom: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
`;

export const HeaderInner = styled.div`
  ${mixins.flexbox("row", "center", "flex-start")};
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  margin: 0 auto;
`;

export const LogoLink = styled.a`
  ${mixins.flexbox("row", "center", "center")};
  svg {
    width: 32px;
    height: 35px;
  }
`;

export const Navigation = styled.nav`
  ${mixins.positionCenter()};
  ul {
    ${mixins.flexbox("row", "center", "center")};
    gap: 48px;
  }
  li {
    ${mixins.flexbox("row", "center", "center")};
    ${({ theme }) => theme.fonts.body9};
    color: ${({ theme }) => theme.colors.gray40};
    &.selected {
      color: ${({ theme }) => theme.colors.gray20};
    }
  }
`;

export const RightSection = styled.div`
  ${mixins.posTopCenterRight("40px")};
  ${mixins.flexbox("row", "center", "center")};
  gap: 16px;
`;