import React, { ChangeEvent, useEffect, useState } from "react";
type PropsType = {
    status: string;
    updateStatus: (value: string) => void;
};
export const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            {!editMode && (
                <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "No Status"}
          </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        onChange={onStatusChange}
                        value={status}
                        onBlur={deactivateEditMode}
                    />
                </div>
            )}
        </div>
    );
};