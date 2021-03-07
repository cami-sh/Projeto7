import {ReactComponent as InicioImg} from '../../Images/inicio.svg'
import './style.css'
import Button from '../Button'
import Text from '../Text'

const Inicio = () => {
    return (
        <div className='Inicio'>
            <div className='Texto'>
                <h1 className='h1'>Save your data storage here</h1>
                
                <Text width={'380px'} height={'120px'}>
                    Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.
                </Text>
                
                <Button primary={false} 
                    backgroundColor={'#9C69E2'} 
                    icon={false}
                    label={'Learn More'}
                />
            </div>
        </div>
    )
}

export default Inicio