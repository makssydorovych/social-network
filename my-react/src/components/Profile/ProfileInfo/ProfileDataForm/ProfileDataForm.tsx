import { FC } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { FormDataFullType } from "../ProfileInfo";
import {createField, Input, Textarea} from "../../../../common/FormControls/FormControl";
import {ProfileType} from "../../../../redux/types";

type ProfileDataFormType = {
    profile: ProfileType;

};
const ProfileDataForm: FC<
    InjectedFormProps<FormDataFullType, ProfileDataFormType> & ProfileDataFormType
    > = ({ profile, handleSubmit, ...props }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {/*   {error & <div style={{ color: "red" }}>{error}</div>} */}
            <b>Full Name :</b>
            {createField(profile.fullName, "fullName", [], Input, {type: "input"} )}

            <p>
                <b>Looking for a job: </b>
                {createField(
                    "Are you looking for a job?",
                    "lookingForAJob",
                    [],
                    Textarea,
                    { type: "checkbox" }
                )}
            </p>
            <p>
                <b>Looking for a job description: </b>
                {createField(
                    "Are you looking for a job?",
                    "lookingForAJobDescription",
                    [],
                    Input,
                    { type: "checkbox" }
                )}
            </p>
            <div>
                <b>Contacts:</b>

                <p>
                    <b>Facebook:</b>
                    {createField("Facebook", "facebook", [], Input, {type: "input"})}
                </p>

                <p>
                    <b>Web-site:</b>
                    {createField(
                        profile.contacts.website ?? "Website",
                        "website",
                        [],
                        Input,
                        {type: "input"}
                    )}
                </p>

                <p>
                    <b>Vk:</b> {createField(profile.contacts.vk ?? "VK", "vk", [], Input, {type: "input"})}
                </p>

                <p>
                    <b>Twitter:</b>
                    {createField(
                        profile.contacts.twitter ?? "Twitter",
                        "twitter",
                        [],
                        Input,
                        {type: "input"}
                    )}
                </p>

                <p>
                    <b>Instagram:</b>
                    {createField(
                        profile.contacts.instagram ?? "Instagram",
                        "instagram",
                        [],
                        Input,
                        {type: "input"}
                    )}
                </p>

                <p>
                    <b>YouTube:</b>
                    {createField(
                        profile.contacts.youtube ?? "YouTube",
                        "youTube",
                        [],
                        Input,
                        {type: "input"}
                    )}
                </p>

                <p>
                    <b>GitHub:</b>
                    {createField(
                        profile.contacts.github ?? "GitHub",
                        "gitHub",
                        [],
                        Input,
                        {type: "input"}
                    )}
                </p>

                <p>
                    <b>MainLink:</b>
                    {createField(
                        profile.contacts.mainLink ?? "Main link",
                        "mainLink",
                        [],
                        Input,
                        {type: "input"}
                    )}
                </p>
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<
    FormDataFullType,
    ProfileDataFormType
    >({
    form: "edit-profile",
    enableReinitialize: true,
})(ProfileDataForm);