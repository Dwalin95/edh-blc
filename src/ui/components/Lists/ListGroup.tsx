import React from 'react';
import { Link } from 'react-router-dom';

export type ListGroupItem = {
  title: string;
  icon: string;
  href?: string;
  text?: string;
};

type ListGroupProps = {
  list: ListGroupItem[];
};

export default function ListGroup({ list }: ListGroupProps) {
  return (
    <div className="list-group">
      {React.Children.toArray(
        list.map((item) => (
          <Link
            to={item.href || '#'}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <div className="list-group-item-content">
              <h3 className="list-group-title">{item.title}</h3>
              {item.text && <p className="mb-0">{item.text}</p>}
            </div>
            <i className={item.icon + ' bi-2x ms-3'} />
          </Link>
        )),
      )}
    </div>
  );
}
