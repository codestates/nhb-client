import React from 'react';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';

export default function HomePage() {
  // function onSetSidebarOpen(): boolean {
  //   return;
  // }

  return (
    <div>
      <Homebutton />
      <Sidebar />
    </div>
  );
}
