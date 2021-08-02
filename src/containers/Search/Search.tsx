import React from 'react';
import { Input, Select } from 'antd';

import type { Category } from '../../api';

import './Search.scss';

type Props = {
  categories: Category[];
};

const { Search: AntSearch } = Input;
const { Option } = Select;

const Search: React.FC<Props> = ({ categories }) => {
  return (
    <section className="Search">
      <Input.Group compact>
        <Select
          className="SelectBox"
          placeholder="Select category"
          optionFilterProp="children"
        >
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.title}
            </Option>
          ))}
        </Select>
        <AntSearch className="InputBox" />
      </Input.Group>
    </section>
  );
};

export default Search;
