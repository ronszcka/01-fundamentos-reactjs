import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src}) {
    return (
        <img
            className={ hasBorder ? styles.border : styles.noBorder }
            src={ src }
            alt="Foto do perfil"
        />
    );
}