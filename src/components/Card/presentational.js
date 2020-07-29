import React from 'react';
import Draggable from 'react-draggable';

const PROFILE_IMAGE_DIMENSIONS = {
  width: 300,
  height: 500,
};

// export const OPACITY_TRANSITION_DURATION = 0.5;

const generateImageUrl = url => `https://images.weserv.nl/?url=${url}&fit=cover&a=smart&h=${PROFILE_IMAGE_DIMENSIONS.height}&w=${PROFILE_IMAGE_DIMENSIONS.width}`;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: `#e7e7e7 solid 1px`,
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: 20,
    cursor: 'pointer',
    // transition: `opacity ease-in-out ${OPACITY_TRANSITION_DURATION}s 0s`,
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 500,
  },
  dummy: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: PROFILE_IMAGE_DIMENSIONS.width,
    // The calculation should be based on other style properties
    height: PROFILE_IMAGE_DIMENSIONS.height + 33,
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    userSelect: 'none',
  },
}

export default function Card({
  stuntDouble,
  onDragStart,
  onDrag,
  onDragStop,
  position,
  style = {},
}) {
  if (stuntDouble) {
    return (
      <Draggable
        onStart={onDragStart}
        onDrag={onDrag}
        onStop={onDragStop}
        axis="x"
        position={position}
      >
        <div style={{ ...styles.container, ...style }}>
          <img src={generateImageUrl(stuntDouble.image)} alt="Profile" draggable={false} />
          <div style={styles.name}>{stuntDouble.name}</div>
        </div>
      </Draggable>
    );
  }

  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.dummy}>There are no stunt doubles left to view</div>
    </div>
  );
}