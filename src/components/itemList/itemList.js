import React, { Component } from "react";
import "./itemList.css";
import GotService from "../../services/gotService";
import Spinner from "../spinner";

export default class ItemList extends Component {
  got = new GotService();

  state = {
    charList: null
  };

  componentDidMount() {
    this.got.getAllCharacters().then((charList) => {
      this.setState({
        charList
      });
    });
  }

  renderItem(arr) {
    return arr.map((item, i) => {
      return (
        <li
          key={i}
          onClick={() => this.props.onCharSelected(41 + i)}
          className="list-group-item"
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { charList } = this.state;
    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItem(charList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
