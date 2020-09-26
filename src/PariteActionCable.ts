import {ActionCable, Cable} from '@kesha-antonov/react-native-action-cable';

const actionCable = ActionCable.createConsumer('ws://10.0.1.34:3000/cable');
const cable = new Cable({});
