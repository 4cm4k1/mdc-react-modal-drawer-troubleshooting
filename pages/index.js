import React, { Component } from "react";

import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent
} from "@material/react-drawer";

import "modern-normalize/modern-normalize.css";
import "@material/react-drawer/dist/drawer.css";

export default class Home extends Component {
  state = { open: false };

  render() {
    return (
      <>
        <Drawer
          modal
          open={this.state.open}
          onClose={() =>
            this.setState({
              open: false
            })
          }
        >
          <DrawerHeader>
            <DrawerTitle>Debugging Modal Drawer</DrawerTitle>
            <DrawerSubtitle>Problem with FocusTrap?</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <ul>
              <li>item</li>
            </ul>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent>
          There seems to be a problem here... try opening the drawer and check
          console logs.
          <button onClick={() => this.setState({ open: true })}>
            {this.state.open ? "Close" : "Open"} Drawer
          </button>
        </DrawerAppContent>
      </>
    );
  }
}
