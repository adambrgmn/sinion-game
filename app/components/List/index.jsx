import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default function List({
  items,
  customClassName,
}) {
  const cxList = { [styles.list]: true };
  const cxListItem = { [styles.listItem]: true };

  const renderListItems = () => {
    if (items) {
      return items.map((text, i) => (
        <li
          key={i}
          className={classNames(cxListItem)}
        >
          {text}
        </li>
      ));
    }

    return null;
  };

  return (
    <ul className={classNames(cxList, customClassName)}>
      {renderListItems()}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};
