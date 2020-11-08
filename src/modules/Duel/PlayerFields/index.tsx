import React, { useMemo } from 'react';

import { Stack } from '@chakra-ui/core';

import { CardPosition } from '~/cards/base-card';

import { BattlefieldCard, EmptyCardSlot } from '../BattlefieldCard';
import { BattlefieldCardZone } from '../BattlefieldCardZone';
import { useField } from '../hooks';

export const PlayerFields: React.FC = () => {
  const field = useField();

  const monsterFieldCards = useMemo(
    () => (
      <>
        <BattlefieldCardZone>
          {Object.values(field.player.monster).map(
            (monster, index: CardPosition) => (
              <React.Fragment key={Math.random()}>
                {monster ? (
                  <BattlefieldCard
                    isDefending={monster.isDefending}
                    isFaceDown={monster.isFaceDown}
                    sleeveUrl={field.player?.cardSleeve}
                    card={monster.card}
                    cardPosition={index}
                  />
                ) : (
                  <EmptyCardSlot />
                )}
              </React.Fragment>
            )
          )}
        </BattlefieldCardZone>
      </>
    ),
    [field.player?.cardSleeve, field.player.monster]
  );

  const spellFieldCards = useMemo(
    () => (
      <>
        <BattlefieldCardZone>
          {Object.values(field.player.spell).map(
            (spell, index: CardPosition) => (
              <React.Fragment key={Math.random()}>
                {spell ? (
                  <BattlefieldCard
                    isFaceDown={spell.isFaceDown}
                    sleeveUrl={field.player?.cardSleeve}
                    card={spell.card}
                    cardPosition={index}
                  />
                ) : (
                  <EmptyCardSlot />
                )}
              </React.Fragment>
            )
          )}
        </BattlefieldCardZone>
      </>
    ),
    [field.player?.cardSleeve, field.player.spell]
  );

  return (
    <Stack spacing="-3px" pos="absolute" left="142px" bottom="74px">
      {monsterFieldCards}
      {spellFieldCards}
    </Stack>
  );
};
