import React, {useState} from 'react'
import './Login.css'

const LoginForm = (props) => {

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
        name: '',
        email: '',
        pass: '',
        npass: '',
        state: 'Karnataka'
    })

    let [err, seterr] = useState(false)
    let [errtxt, seterrtxt] = useState('')

    let handleInputChange = (e) => {
        
        // console.log(e.target.name)
        // setValue('asjdhjakls')
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }

    let handleSubmit = (e) => {
        e.preventDefault();

        if(!value.name || !value.email || !value.pass || !value.npass) {
            seterr(true);
            seterrtxt('Please enter all the fields')
        } else if(value.name.length < 2){
            seterr(true);
            seterrtxt('Name is too short')
        } else if(value.pass !== value.npass){
            seterr(true)
            seterrtxt('passwords do not match')
        } else {
            seterr(false)
            localStorage.setItem('user',  JSON.stringify(value))
            props.changeUserData(value);
        }
       
    }

    return (
        <form>
            <div className='input_group'>
                <h1>{props.name}</h1>
                <label className="input_label red_star"><span className='label_text'>Name</span></label>
                <input className='input' name="name" required onChange={handleInputChange} value={value.name}/>
            </div>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Email</span></label>
                <input className='input' name="email" required onChange={handleInputChange} value={value.email}/>
            </div>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Password</span></label>
                <input className='input' type="password" name="pass" required onChange={handleInputChange} value={value.pass}/>
            </div>
            <div className='input_group'>
                <label className="input_label red_star"><span className='label_text'>Re enter your password</span></label>
                <input className='input' type="password" name="npass" required onChange={handleInputChange} value={value.npass}/>
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
            {err ? <div className='err'>{errtxt}</div>: null}
            <button type="submit" value="Submit" className="button button_wide" onClick={handleSubmit}>Create your account</button>
        </form>
    )

}
// controlled vs uncontrolled compoennt
const Login = (props) => {
    return(
        <div className="login-wrapper">
            <div className="login-form">
                <div className="banner-img">
                    <img alt="img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg" />
                </div>
                {/* FORM ELEMENT STARTS HERE */}
                <div className="form-container">
                    <LoginForm changeUserData={props.changeUserData} />
                </div>
            </div>
        </div>
    )
}

export default Login;