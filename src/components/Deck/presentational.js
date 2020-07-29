import React from 'react';
import Card from '../Card';

const styles = {
  firstCard: {
    position: 'relative',
    top: -575,
    // The calculation should be based on Card style properties
    marginBottom: -575,
    zIndex: 2,
  },
  secondCard: {
    zIndex: 1,
  },
}

export default function Deck({
  stuntDoubles,
}) {
  return (
    <div>
      <Card stuntDouble={stuntDoubles[1] || stuntDoubles[0]} style={styles.secondCard} />
      <Card stuntDouble={stuntDoubles[0]} style={styles.firstCard} />
    </div>
  );
}
