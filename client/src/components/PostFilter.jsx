import React from 'react';

import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

// Компонент для фильтрации постов
const PostFilter = ({filter, setFilter}) => {
    return ( 
      <div className="postFilter">
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск...'
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: "По описанию"}
          ]}
        />
      </div>
    );
}

export default PostFilter;