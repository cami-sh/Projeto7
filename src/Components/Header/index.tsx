import {ReactComponent as Logo} from '../../Images/Logo.svg'
import './style.css'
import Button from '../Button'
import Menu from '../Menu'

const Header = () => {
    return (
        <div className='Header'>
            <Logo />
            <Menu />
            <Button primary={true} icon={true} label={'Request Demo'}/>
        </div>
    )
}

export default Header