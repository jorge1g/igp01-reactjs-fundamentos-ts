import { ImgHTMLAttributes } from 'react';
import stylesAvatar from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return(
        <img 
            className={hasBorder ? stylesAvatar.avatarWithBorder : stylesAvatar.avatar} 
            {...props}
        />
    );
}