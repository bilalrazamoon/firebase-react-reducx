import ActionTypes from '../constants/action_types';
import database from './database';

export function watchGuestChangedEvent(dispatch) {
    database.ref('/guests').on('child_changed', (snap) => {
        dispatch(getGuestChangedAction(snap.key, snap.val()));
    });
}

function getGuestChangedAction(guestKey, guest) {
    return {
        type: ActionTypes.GuestChanged,
        guestKey,
        guest
    };
}