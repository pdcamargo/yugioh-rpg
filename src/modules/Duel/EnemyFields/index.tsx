import React, { useMemo } from 'react';

import { Stack } from '@chakra-ui/core';

import { BattlefieldCard, EmptyCardSlot } from '../BattlefieldCard';
import { BattlefieldCardZone } from '../BattlefieldCardZone';
import { useField } from '../hooks';

export const EnemyFields: React.FC = () => {
  const field = useField();

  const monsterFieldCards = useMemo(
    () => (
      <>
        <BattlefieldCardZone>
          {Object.values(field.enemy.monster).map((monster) => (
            <React.Fragment key={Math.random()}>
              {monster ? (
                <BattlefieldCard
                  isOpponentCard
                  isDefending={monster.isDefending}
                  isFaceDown={monster.isFaceDown}
                  sleeveUrl={field.enemy?.cardSleeve}
                  card={monster.card}
                />
              ) : (
                <EmptyCardSlot />
              )}
            </React.Fragment>
          ))}
        </BattlefieldCardZone>
      </>
    ),
    [field.enemy?.cardSleeve, field.enemy.monster]
  );

  const spellFieldCards = useMemo(
    () => (
      <>
        <BattlefieldCardZone>
          {Object.values(field.enemy.spell).map((spell) => (
            <React.Fragment key={Math.random()}>
              {spell ? (
                <BattlefieldCard
                  isOpponentCard
                  isFaceDown={spell.isFaceDown}
                  sleeveUrl={field.enemy?.cardSleeve}
                  card={spell.card}
                />
              ) : (
                <EmptyCardSlot />
              )}
            </React.Fragment>
          ))}
        </BattlefieldCardZone>
      </>
    ),
    [field.enemy?.cardSleeve, field.enemy.spell]
  );

  return (
    <Stack spacing="-3px" pos="absolute" left="142px" top="25px">
      {spellFieldCards}
      {monsterFieldCards}
    </Stack>
  );
};
