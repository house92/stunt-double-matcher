import React from 'react';
import { connect } from 'react-redux';

import Deck from './presentational';

const mapStateToProps = ({ deck }) => {
  return { deck };
};

function DeckContainer({
  deck = {},
  style = {},
}) {
  return <Deck stuntDoubles={deck.stuntDoubles} style={style} />;
}

export default connect(mapStateToProps, null)(DeckContainer);
