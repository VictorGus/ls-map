import React, {useState} from 'react';
import {Alert} from 'reactstrap';

function Alarm (props) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} style={{position: "fixed", top: 0, left: 0, "max-height": "70px", width: "300px", height: "100%", "z-index":99}} toggle={onDismiss}>
      Not supported map!
    </Alert>
  );
}

export default Alarm;
