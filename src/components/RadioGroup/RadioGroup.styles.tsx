import styled, { css } from 'styled-components';
import { gray150 } from 'remember-ui';

export const Container = styled.div``;

export const RadioButton = styled.img`
  height: 18px;
  width: 18px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  user-select: none;
  -webkit-touch-callout: none;
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const LabelText = styled.span<{
  pos: 'left' | 'right';
  disabled: boolean;
}>`
  ${({ pos }) => {
    if (pos === 'left') {
      return css`
        margin-right: 8px;
      `;
    }

    return css`
      margin-left: 8px;
    `;
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${gray150};
    `}
`;
