import styled, { css } from 'styled-components'

export const  Card = styled.div`
    ${({ theme }) => css `
       background-color: ${theme.colors.white};
       display: flex;
       border-radius: 15px;
       flex-direction: column;
       max-height: fit-content;
       padding: 15px;
    `}
`
