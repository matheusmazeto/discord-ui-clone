import React from 'react'

import {
  Container,
  SelectedChannel,
  Separator,
  ChannelList,
  NotificationBadge,
  NotificationIndicator
} from './styles'

const ServerList = () => {
  return (
    <Container>
      <SelectedChannel>
        <NotificationBadge />
      </SelectedChannel>
      <Separator />
      <ChannelList />
      <ChannelList>
        <NotificationIndicator />
      </ChannelList>
      <ChannelList>
        <NotificationBadge />
      </ChannelList>
      <ChannelList />
      <ChannelList />
      <ChannelList>
        <NotificationIndicator />
      </ChannelList>
      <ChannelList />
      <ChannelList>
        <NotificationIndicator />
      </ChannelList>
      <ChannelList>
        <NotificationBadge />
      </ChannelList>
    </Container>
  )
}

export default ServerList
