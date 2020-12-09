import Input from '@material-ui/core/Input'
import './Inputs.css'

const Inputs = () => {
  return (
    <div className='Inputs'>
      <Input
        id='email'
        type='text'
        name='email'
        label='Standard'
        placeholder='e-mail'
        className='margin'
      />
      <Input
        id='password'
        name='password'
        type='password'
        label='Standard'
        placeholder='password'
        className='margin'
      />
    </div>
  )
}

export default Inputs
