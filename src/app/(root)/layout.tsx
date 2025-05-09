import React from 'react'

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout(props: Props ) {
  const { children } = props;
  return (
    <div>
      <header>I am root layout</header>
      <div>
        {children}
      </div>
    </div>
  )
}
