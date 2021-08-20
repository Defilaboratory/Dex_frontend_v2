import styled from 'styled-components'

// background: ${(props) => props.theme.card.background};
// box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
// border-radius: 32px;
// color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
// box-shadow: ${({ isActive }) =>
//     isActive
//       ? '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);'
//       : '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)'};
const Card = styled.div<{ isActive?: boolean; isFinished?: boolean }>`
button {
  color: #ffffff !important;
  background: #E45E5E !important;
  border-radius: 8px;
  border: none;
}
  background: #ffffff;
  border-radius: 13px;
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  
  flex-direction: column;
  position: relative;

  svg[color="text"] {
    fill: #ABABAB !important;
  }
  a[color="primary"], svg[color="primary"] {
    color: #DC47E6 !important;
    fill: #DC47E6 !important;
  }
  [role="button"] {
    background-color: transparent !important;
  }
  div[color="text"] {
    color: #999999 !important;
  }
`

export default Card
