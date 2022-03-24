import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props: any) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> )}
            </div>
            <div className={s.messages}>
                {props.state.messages.map( m => <Message key={m.id} message={m.message}/>) }
            </div>
        </div>
    )
}

export default Dialogs;
