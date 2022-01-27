import React, {useState} from 'react'
import './Login.css'

const LoginForm = () => {

    // let [name, setName] = useState('')
    // let [email, setEmail] = useState('')
    // let [pass, setPass] = useState('')
    // let [npass, setnpass] = useState('')
    //DRY
    // let changeName = (e) => {
    //     setName(e.target.value)
    // }

    // let changeEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // let changePass = (e) => {
    //     setPass(e.target.value)
    // }

    // let changenPass = (e) => {
    //     setnpass(e.target.value)
    // }
    let [value, setValue] = useState({
        name: 'aviral',
        email: '',
        pass: '',
        npass: '',
        state: 'Karnataka'
    })



    let handleInputChange = (e) => {
        // console.log(e.target.name)
        // setValue('asjdhjakls')
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }

    return (
        <form>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Name</span></label>
                <input className='input' name="name" required onChange={handleInputChange} value={value.name}/>
            </div>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Email</span></label>
                <input className='input' name="email" required onChange={handleInputChange} value={value.email}/>
            </div>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Password</span></label>
                <input className='input' name="pass" required onChange={handleInputChange} value={value.pass}/>
            </div>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Re enter your password</span></label>
                <input className='input' name="npass" required onChange={handleInputChange} value={value.npass}/>
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">State</span></label>
                <select value={value.state} name="state" onChange={handleInputChange}>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
            </div>
            <button type="submit" value="Submit" className="button button_wide">Create your account</button>
        </form>
    )

}
// controlled vs uncontrolled compoennt
const Login = () => {
    return(
        <div className="login-wrapper">
            <div className="login-form">
                <div className="banner-img">
                    <img alt="img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg" />
                </div>
                {/* FORM ELEMENT STARTS HERE */}
                <div className="form-container">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;