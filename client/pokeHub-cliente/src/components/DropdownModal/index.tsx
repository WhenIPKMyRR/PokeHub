import React from 'react';
import { Dropdown, Space, Menu } from 'antd';

interface DropDownMenuProps {
  onDelete: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onDelete }) => (
  <Dropdown
    overlay={
      <Menu>
        <Menu.Item key="0" onClick={onDelete}>
          Deletar Pokemon
        </Menu.Item>
      </Menu>
    }
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <svg width={30} height={30} fill="#a3a3a3" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M18 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" clipRule="evenodd" />
        </svg>
      </Space>
    </a>
  </Dropdown>
);

export default DropDownMenu;
