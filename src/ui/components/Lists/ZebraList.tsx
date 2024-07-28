import React from 'react';

type ZebraListProps = {
  items: ListItem[];
};

type ListItem = {
  label: string;
  value: string | undefined;
};

export default function ZebraList({ items }: ZebraListProps) {
  return (
    <ul className="list-bg-light-odd list-unstyled mb-4">
      {React.Children.toArray(
        items.map((item) => (
          <li className="p-2">
            <span className="form-label d-inline me-2">{item.label}:</span>
            {item.value}
          </li>
        )),
      )}
    </ul>
  );
}
