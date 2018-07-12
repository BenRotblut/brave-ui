/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledLogo,
  StyledTitle,
  StyledTM,
  StyledLeft,
  StyledRight,
  StyleTitle,
  StyleText,
  StyledContent
} from './style'
import Toggle from '../toggle'
import { getLocale } from '../../helpers';

const logo = require('./assets/bat')

export interface Props {
  enabled: boolean
  onToggle: () => void
  id?: string
}

export default class MainToggle extends React.PureComponent<Props, {}> {
  render () {
    const { id, enabled, onToggle } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLeft>
          <StyledLogo>{logo}</StyledLogo>
          <StyledTitle>
            {getLocale('braveRewards')} <StyledTM>TM</StyledTM>
          </StyledTitle>
        </StyledLeft>
        <StyledRight>
          <Toggle checked={enabled} onClick={onToggle} size={'large'} />
        </StyledRight>
        {
          !enabled
          ? <StyledContent>
            <StyleTitle>{getLocale('rewardsWhy')}</StyleTitle>
            <StyleText>
              {getLocale('rewardsOffText1')} <br/>
              <b>{getLocale('rewardsOffText2')}</b>
            </StyleText>
            <StyleTitle>{getLocale('rewardsOffText3')}</StyleTitle>
            <StyleText>
              {getLocale('rewardsOffText4')}
            </StyleText>
          </StyledContent>
          : null
        }
      </StyledWrapper>
    )
  }
}
