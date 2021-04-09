import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';

const Sidebar = () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div>
      <div>
        <p onClick={() => setOpenPanel(true)}>=</p>
      </div>
      <SlidingPanel type={'right'} isOpen={openPanel} size={30}>
        <div>
          <div>My Panel Content</div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel>
    </div>
  );
};

export default Sidebar;
