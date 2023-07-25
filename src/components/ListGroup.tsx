import { useState } from "react";
// import "../styles/ListGroup.css";
import styled from "styled-components";
import { CgBee } from "react-icons/cg";

interface ListGroupProps {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style: none;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0px;
  background-color: ${(props) => (props.active ? "beige" : "white")};
`;

const ListGroup = ({ items, title, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>ListGroup</h1>
      <h1>{title}</h1>
      {items.length === 0 ? (
        <h1>No items found!!</h1>
      ) : (
        <List
        // className="list-group"
        >
          {items.map((item, index) => {
            return (
              <ListItem
                active={index === selectedIndex}
                key={index}
                // className={
                //   selectedIndex === index
                //     ? "list-group-item active"
                //     : "list-group-item"
                // }
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
              >
                {item}
                {"   "}
                {<CgBee color="blue" size="35px" />}
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ListGroup;
