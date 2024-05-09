import react from 'react'
function Login(){
return(<div className="login">
<div className="box">
     <form action="">
     <div  className="heading"> <h3>Login</h3>   </div>
       <div className="login_form"></div>
      <div className="username"><input type="text" placeholder="UserName"  className="name" /></div>
      <div className="password"><input type="password" placeholder="password" className="password" /></div>
      <div className="remember">
        <div><input type="checkbox" /> <span> Remember me</span></div>
        <div> Forget Me?</div>
      </div>
      <div className="button"> <button className="login">login</button>
</div>
     </form>
     </div>
     </div>)
}



 export  default Login;