import { useAuth } from '../../Auth'
import * as React from 'react'

export function Login () {
    const [username, setUsername] = React.useState<string>('')
    const auth = useAuth()
    const handleLogin = ():void => {
      console.log(username)
      auth.login(username)
    }
    return (
      <div>
        <h1>NEED LOGIN</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username"/>
          <button onClick={handleLogin} type="submit">Login</button>
        </form>
      </div>
    )
  }