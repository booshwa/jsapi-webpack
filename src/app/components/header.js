import React from "react";
import { Menu, Input } from 'semantic-ui-react'

export class Header extends React.Component {

  render_search() {
    if (this.props.search) {
      return (
        <Menu.Item>
          <Input icon='search' placeholder='Search' iconPosition='left' size={"small"} inverted={true} transparent={true} />
        </Menu.Item>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <Menu fluid={true} id="site_header" size={"small"} inverted={true}>
        <Menu.Item>
          {this.props.title}
        </Menu.Item>

        <Menu.Menu position='right'>
          {this.render_search()}
        </Menu.Menu>
      </Menu>
    );
  }
}