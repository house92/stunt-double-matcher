import React, { useState } from 'react';
import { connect } from 'react-redux';

import Card from './presentational';
import ApiService from '../../services/ApiService';
import { updateUser } from '../../slices/user';
import { removeFromDeck, moveToBottomOfDeck } from '../../slices/deck';

const MINIMUM_MOVEMENT = 10;

const mapStateToProps = ({ user }) => {
  return { user };
};
const mapDispatchToProps = { updateUser, removeFromDeck, moveToBottomOfDeck };

function CardContainer({
  stuntDouble,
  user,
  updateUser,
  removeFromDeck,
  moveToBottomOfDeck,
  style = {},
}) {
  const [startingX, setStartingX] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // TODO: implement clean fade-out
  // const [opacity, setOpacity] = useState(1);

  return <Card
    stuntDouble={stuntDouble}
    onDragStart={event => setStartingX(event.clientX)}
    onDrag={(_, data) => setPosition({ x: data.x, y: 0 })}
    onDragStop={event => {
      if (event.offsetX > MINIMUM_MOVEMENT) {
        if (event.clientX > startingX) {
          ApiService.patchUser(user, { likedStuntDoubleId: stuntDouble.id })
            .then(res => res.json())
            .then(user => {
              updateUser({ user });
              // setOpacity(0);
              // setTimeout(() => {
              //   removeFromDeck();
              //   setOpacity(1);
              // }, OPACITY_TRANSITION_DURATION * 1000);
              removeFromDeck();
              // TODO: another Redux action to trigger a "liked" notification
            });
        } else if (event.clientX < startingX) {
          // Shuffle back into deck, but could also implement feature to no longer show
          // or not show for x period of time
          // setOpacity(0);
          // setTimeout(() => {
          //   moveToBottomOfDeck();
          //   setOpacity(1);
          // }, OPACITY_TRANSITION_DURATION * 1000);
          moveToBottomOfDeck();
          // TODO: another Redux action to trigger a "rejected" notification
        }
      }
      setPosition({ x: 0, y: 0 });
    }}
    position={position}
    style={{ ...style, /* opacity */ }}
  />;
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
