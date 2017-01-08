import ActionTypes from '../constants/action_types';
import database from './database';

export function watchGuestRemovedEvent(dispatch) {
    database.ref('/guests').on('child_removed', (snap) => {
        dispatch(getGuestRemovedAction(snap.val()));
    });
}

function getGuestRemovedAction(guest) {
    return {
        type: ActionTypes.GuestRemoved,
        guest
    };
}