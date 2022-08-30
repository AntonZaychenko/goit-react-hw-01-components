import css from './FriendList.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
         {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
        ) )}
        </ul>
    )
}