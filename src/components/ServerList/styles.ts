import styled from 'styled-components'

import Logo from 'assets/logo.svg'

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
`

export const SelectedChannel = styled.div`
  position: relative;

  width: 48px;
  height: 48px;
  border-radius: 16px;

  background-color: var(--discord);
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;

  margin: 11px 0 8px;

  cursor: pointer;
`

export const Separator = styled.div`
  width: 32px;
  height: 2px;

  background-color: #2d2f32;
`

export const NotificationIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: -11px;
  transform: translate(-50%, -50%);

  width: 9px;
  height: 9px;
  border-radius: 50%;

  background-color: var(--white);

  transition: height 0.2s;
`

export const ChannelList = styled.div`
  position: relative;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: var(--primary);

  margin: 8px 0;

  transition: border-radius 0.2s, background-color 0.2s, height 0.2s;

  cursor: pointer;

  &:hover {
    border-radius: 16px;
    background-color: var(--discord);
  }

  &:hover ${NotificationIndicator} {
    height: 18px;
    border-radius: 0 5px 5px 0;
  }
`
export const NotificationBadge = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: var(--notification);
  border: 4px solid var(--tertiary);
`
