import {useState} from 'react'

function Theme(){
    let [theme, setTheme]=useState('white')
    function black(){
        setTheme('black')
    }
    return(
        <>
        <div style={{width:"100vh", height:"100vw", background:theme}}>
            <button onClick={black}>black</button>
        </div>
        </>
    )
}
export default Theme