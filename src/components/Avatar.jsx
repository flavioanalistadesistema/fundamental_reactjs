import styles from './Avatar.module.css'

export function Avatar({src, withBorder = true}) {
    return (
        <img 
            className={withBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
        />
    )
}