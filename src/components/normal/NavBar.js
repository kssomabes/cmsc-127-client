import React, { Component } from 'react'
import { Dropdown, Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' label='Home' as='a' href='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='requisitions' label='Requisitions' as='a' href='/requisitions' active={activeItem === 'requisitions'} onClick={this.handleItemClick} />
          <Menu.Item name='orders' label='Orders' as='a' href='/orders' active={activeItem === 'orders'} onClick={this.handleItemClick} />
          <Menu.Item name='items' label='Items' as='a' href='/items' active={activeItem === 'items'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='search' label='Search'>
            <Input icon='search' placeholder='Search username...'/>
            </Menu.Item>
            <Menu.Item name='logout' label= 'Logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
