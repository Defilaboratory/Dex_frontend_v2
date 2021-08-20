import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper >
      <ViewControls>
        <ToggleWrapper>
          <Toggle id="toggle-btn" checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
          <Text color="#ffffff"> {TranslateString(699, 'Staked only')}</Text>
        </ToggleWrapper>
        <div id="farmButton">
          <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" variant="subtle">
            <ButtonMenuItem as={Link} to={`${url}`}>
              {TranslateString(698, 'Active')}
            </ButtonMenuItem>
            <ButtonMenuItem as={Link} to={`${url}/history`}>
              {TranslateString(700, 'Inactive')}
            </ButtonMenuItem>
          </ButtonMenu>
        </div>
      </ViewControls>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`
const ViewControls = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
    display: flex;
  }

  > div > button > [color="primary"] {
    fill: #E45E5E;
  }

 
  ${({ theme }) => theme.colors.primary} {
    color: #E45E5E;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    color: #707070 !important;
    margin-left: 8px;
    font-size: 12px !important;
    background: transparent !important;
  }
  div:focus {
    background-color: #E45E5E !important;
  }
  div{
    background: #FDF3F3 !important;
    > div {
      background-color: #ffffff !important;
    }
  }
`