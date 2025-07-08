import { Link } from 'react-router-dom'


function AuthLogin(props) {
    const { children , title , type } = props
    return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='w-full max-w-xs rounded p-4 border'>
        <h1 className='text-2xl font-bold mb-2'>{title}</h1>
        <p className="font-medium"><i> Enter Your Detail bludss</i></p>
        {children}
        <Nav type={type} />
        </div>
    </div>
    )
}     function Nav ({type}) {
    if (type === 'Login') {
        return (
            <p className="bg-clip-text bg-gradient-to-r 
            from-slate-400 via-slate-600 to-slate-800 
            text-transparent mt-2 text-center" > 
            Didn't Have An Account ?{" "}
            <Link to="/Register" className="font-semibold cursor-pointer"> 
            Register</Link></p>
        )
    } else {
        return (
            <p className="bg-clip-text bg-gradient-to-r 
            from-slate-400 via-slate-600 to-slate-800 
            text-transparent mt-2 text-center" > 
            Have An Account ?{" "}
            <Link to="/Login" className="font-semibold cursor-pointer"> 
            Login</Link></p>
        )
    }
}



export default AuthLogin

