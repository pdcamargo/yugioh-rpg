import React from 'react';

import { Deck } from '../Deck';
import { DeckType } from '../Deck/types';
import { useField, usePlayerDeck } from '../hooks';
import { Player } from '../types';

export const BattlefieldDecks: React.FC = () => {
  const field = useField();
  const { drawCard } = usePlayerDeck();

  const onBattlefieldDeckClick = (deckType: string) => {
    if (deckType !== 'player') return;

    drawCard();
  };

  return (
    <>
      {Object.keys(field).map((key) => {
        const player: Player = field[key];
        return (
          <React.Fragment key={key}>
            <Deck
              deckType={DeckType.Deck}
              cards={player.deck}
              sleeveUrl={player?.cardSleeve}
              isOpponentDeck={key === 'enemy'}
              onClick={() => onBattlefieldDeckClick(key)}
            />
            <Deck
              deckType={DeckType.Graveyard}
              cards={player.graveyard}
              sleeveUrl={player?.cardSleeve}
              isOpponentDeck={key === 'enemy'}
            />
            <Deck
              deckType={DeckType.Extra}
              cards={player.extra}
              sleeveUrl={player?.cardSleeve}
              isOpponentDeck={key === 'enemy'}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
