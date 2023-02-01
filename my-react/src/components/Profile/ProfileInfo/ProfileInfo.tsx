import s from "./ProfileInfo.module.css";
import React, {ChangeEvent, FC, useState} from "react";
import Preloader from "../../../common/preloader/Preloader";
import {ContactType, ProfileType} from "../../../redux/types";
import ProfileStatus from "./ProfileStatus";
import {ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";
import { logo } from "../../../assets/logo.png";

type ProfileInfoType = {
	profile: ProfileType | null;
	status: string;
	updateStatus: (status: string) => void;
	isOwner: boolean;
	savePhoto: (file: File) => void;
	saveProfile: (
		profile: Omit<ProfileType, "userId" | "photos">
		) => Promise<any>;
};
type FormDataType = {
	[key: string]: string;
};
export type FormDataFullType = FormDataType & {
	lookingForAJob: boolean;
};
export const ProfileInfo: FC<ProfileInfoType> = ({profile, status,
													 isOwner, savePhoto, updateStatus, saveProfile,}) => {
	const [editMode, setEditMode] = useState(false);

	const onSubmit = (formData: FormDataFullType) => {
		const {
			fullName,
			lookingForAJob,
			github,
			instagram,
			facebook,
			twitter,
			website,
			youtube,
			mainLink,
			vk,
			lookingForAJobDescription,
		} = formData;

		const newProfile: Omit<ProfileType, "userId" | "photos"> = {
			fullName: fullName || profile?.fullName || "",
			lookingForAJob: lookingForAJob || false,
			lookingForAJobDescription:
				(lookingForAJobDescription || profile?.lookingForAJobDescription) ?? "",
			contacts: {
				github: github ?? profile?.contacts.github ?? null,
				instagram: instagram ?? profile?.contacts.instagram ?? null,
				facebook: facebook ?? profile?.contacts.facebook ?? null,
				twitter: twitter ?? profile?.contacts.twitter ?? null,
				vk: vk ?? profile?.contacts.vk ?? null,
				website: website ?? profile?.contacts.website ?? null,
				youtube: youtube ?? profile?.contacts.website ?? null,
				mainLink: mainLink ?? profile?.contacts.mainLink ?? null,
			},
		};
		saveProfile(newProfile).then(() => {
			setEditMode(false);
		});
	};
	const onMainPhotoUpdate = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};
	if (!profile) {
		return <Preloader />;
	}
	return (
		<div>
			<img
				src={profile.photos.large || logo}
				alt="avatar"
				className={s.profile_image}
			 />
			{isOwner && <input type={"file"} onChange={onMainPhotoUpdate} />}
			<ProfileStatus status={status} updateStatus={updateStatus} />
			{editMode ? (
				<ProfileDataReduxForm profile={profile} onSubmit={onSubmit} />
			) : (
				<ProfileData
					profile={profile}
					setEditMode={setEditMode}
					isOwner={isOwner}
				/>
			)}
		</div>
	);
};

type ProfileDataType = {
	profile: ProfileType;
	isOwner: boolean;
	setEditMode: (value: boolean) => void;
};
const ProfileData = ({ profile, setEditMode, isOwner }: ProfileDataType) => {
	return (
		<>
			{isOwner && <button onClick={() => {console.log('ture') ;setEditMode(true)}}>edit</button>}
			<h2>{profile.fullName}</h2>

			<p>
				<b>Looking for a job: </b>
				{profile.lookingForAJob ? (
					<span>{profile.lookingForAJobDescription}</span>
				) : (
					<span>no</span>
				)}
			</p>
			<div>
				<b>Contacts:</b>{
				Object
					.keys(profile.contacts)
					.map((key)=>{
						return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactType]}	/>
					})
			}
			</div>
		</>
	);
};
type ContactPropsType = {
	contactTitle:string
	contactValue: string
}
const Contact: React.FC<ContactPropsType> =({contactTitle, contactValue})=>{
	return<div><b>{contactTitle}</b>: {contactValue}</div>
}