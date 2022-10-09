import { cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import Button from './Button';
import Box from './Box';
import Item from './Item';

function ListBox({ children, className }) {
  const [showBox, setShowBox] = useState(false);
  const [active, setActive] = useState(0);
  const ButtonE = useRef(null);
  let ButtonClone = null;
  let BoxClone = null;
  let ItemClone = [];
  let childrenClone = [];

  const handleCloseBox = (e) => {
    if (ButtonE.current == e.target.parentElement) {
      setShowBox(!showBox);
    } else {
      setShowBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseBox);

    return () => {
      document.removeEventListener('click', handleCloseBox);
    };
  });

  useMemo(() => {
    if (children.length > 1) {
      children.map((child, index) => {
        childrenClone[index] = child;
        if (child.type === Button) {
          ButtonClone = cloneElement(child, {
            activeIndex: active,
            ref: ButtonE,
            key: index,
          });
          childrenClone[index] = ButtonClone;
        }
        if (child.type === Box) {
          if (child.props.children.length > 1) {
            ItemClone = child.props.children.map((item, indexItem) => {
              if (item.type === Item) {
                return cloneElement(item, {
                  active: active === indexItem,
                  onClick: () => {
                    setShowBox(false);
                    setActive(indexItem);
                  },
                  key: indexItem,
                });
              }
            });
          } else {
          }
          BoxClone = cloneElement(child, { isShow: showBox, key: index, children: ItemClone });
          childrenClone[index] = BoxClone;
        }
      });
    }
  });

  return <div className={className}>{childrenClone}</div>;
}

ListBox.Button = Button;
ListBox.Box = Box;
ListBox.Item = Item;

export default ListBox;
