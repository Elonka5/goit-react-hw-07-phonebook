import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 16px;
`;

export const ContactStyled = styled.li`
  display: flex;
  gap: 8px 12px;
  justify-content: space-between;
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 80px;
  height: 20px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  transition: all 0.2s ease;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;

  button:hover {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
  }

  button:active {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }

  button:focus {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }
`;
