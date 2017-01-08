import { connect } from "react-redux";

import { getInvite } from "../actions/get_invite";
import { addToInvite } from "../actions/add_invite";
import { watchGuestAddedEvent } from '../actions/guest_added_event';
import { watchGuestRemovedEvent } from '../actions/guest_removed_event';
import { watchGuestChangedEvent } from '../actions/guest_changed_event';


import Invite from '../components/invite.jsx';

function mapStateToProps(state) {
    return {
        invite: state.invite
    }
}

function mapDispatchToProps(dispatch) {
    watchGuestAddedEvent(dispatch);
    watchGuestRemovedEvent(dispatch);
    watchGuestChangedEvent(dispatch);
    return {
        onGetInvite: () => dispatch(getInvite()),
        onAddToInvite: (name) => dispatch(addToInvite(name))
    };
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

export default inviteContainer;