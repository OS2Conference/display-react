import React, { Component } from "react";
import { getTags } from "../../services/fetchService";

class ListGroup extends Component {

  render() {
    const {
      items,
      onItemSelect,
      textProperty,
      valueProperty,
      selectedItem,
    } = this.props;
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;
