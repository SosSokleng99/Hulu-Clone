import type { NextPage } from 'next'
import styles from '../SwitchButton/SwitchButton.module.css'

interface SwitchProps {
    isOn: boolean;
    toggleSwitch: any;
}

const SwitchButton: NextPage<SwitchProps> = (props) => {

    const { isOn, toggleSwitch } = props;

    return (
        <div className={styles.container}>
            <div className={styles.toggle_switch}>
                <input
                    checked = {isOn}
                    type="checkbox" 
                    className={styles.checkbox}
                    name={`label`} 
                    id={`label`}
                    onChange={toggleSwitch} />
                <label 
                className={styles.label} 
                htmlFor={`label`}>
                    <span className={styles.inner}/>
                    <span className={styles.switch} />
                </label>
            </div>
        </div>
    )
}

export default SwitchButton
