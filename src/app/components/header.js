import React from "react";
import { Menu, Input } from 'semantic-ui-react'

const size = "small";

export const Header = (props) =>
  <Menu fluid={true} id="site_header" size={size} inverted={true}>
    <Menu.Item>
      ESRI Webpack Demo
    </Menu.Item>
    <Menu.Item position="right" >
    <Input icon='search' placeholder='Search' iconPosition='left' size={size} inverted={true} transparent={true} />
    </Menu.Item>
  </Menu>
  