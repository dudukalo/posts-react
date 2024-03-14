import React from 'react';

import styles from './Pagination.module.css';

const Pagination = React.memo(({ pagesCount, onNavigateClick }) => {
  const nav = [...Array(pagesCount)].map((_, i) => {
    const pageIndex = ++i;
    return (
      <button
        key={pageIndex}
        onClick={()=>onNavigateClick(pageIndex)}
        className={styles.btn}
      >
        {pageIndex}
      </button>
    );
  });

  return (
    <div className={styles.pagination}>
      {nav}
    </div>
  );
});
 
export default Pagination;