import React from 'react'

const Basiclayout = ({children}) => {
  return (
    <div>
      {/* now this page will act as a global page inside blog and would be availble in every page inisde global pages */}
      <h1>this is the blog layout page</h1>
      {children}
    </div>
  )
}

export default Basiclayout
