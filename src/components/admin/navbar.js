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
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='Purchase Requisitions' active={activeItem === 'Purchase Requisitions'} onClick={this.handleItemClick} />
          <Menu.Item name='Purchase Orders' active={activeItem === 'Purchase Orders'} onClick={this.handleItemClick} />
          <Menu.Item name='Inventory Items' active={activeItem === 'Inventory Items'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
            <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
