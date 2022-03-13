import { Component } from 'solid-js';
import { DeepReadonly } from 'solid-js/store';
import { MissionKill } from '../../../types';
import { QuestNumberInput } from '../QuestNumberInput';
import { MissionUpdator } from './types';

type Props = {
  mission: DeepReadonly<MissionKill>;
  updateMission: MissionUpdator<MissionKill>;
};

export const MissionKillForm: Component<Props> = props => {
  return (
    <>
      <h4 style={{ display: 'inline-block', float: 'right' }}>{props.mission.type} mission</h4>
      <QuestNumberInput fieldName="count" value={props.mission.count ?? 0} setValue={console.log} />
    </>
  );
};
