import styled from "styled-components";

export const LabelledProperty = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

export const PropertyGroup = styled.div`
  display: flex;
  & > div {
    margin-right: 20px;
  }
`;

export const Label = styled.span`
  margin-left: 8px;
`;
