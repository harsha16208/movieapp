import ReactDOM from "react-dom"
import {useRef} from "react"


export default function Modal({name,handler}){

    const uname=useRef(null)
    const city=useRef(null)

    function bookticket()
    {
        if(uname.current.value!='' && city.current.value!='')
        {
        localStorage.setItem('uname',uname.current.value);
        localStorage.setItem('city',city.current.value);
        handler()
        alert('ticket booked successfully')
        }
    }
    
    return ReactDOM.createPortal(<div style={modal_styles}>
        <h1> {name}</h1>
        
            <label style={label_styles}>username</label>
            <input type="text" ref={uname} style={input_style}></input>
            <label style={label_styles}>city</label>
            <input type="text" ref={city} style={input_style}></input>
            <button onClick={bookticket} style={button_styles}>BookTicket</button>
            <button onClick={()=>handler()} style={close_button}>X</button>
    </div>,document.getElementById("bookticket"))
}

const modal_styles={
  
    position:'absolute',
    top:'360px',
    left:'800px',
    height:'300px',
    width:'350px',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    alignItems:'center',
    backgroundColor:'#232F3E',
    color:'white'

}

const button_styles={color:'white',backgroundColor:"green",border:'none',margin:'10px',height:'50px',cursor:'pointer', width:'50%'}

const close_button={
    position:'absolute',
    top:'0px',
    right:'0px',
    height:'30px',
    width:'30px',
    backgroundColor:'red',
    color:'white',
    border:'none'
}

const input_style={
    width:'70%',
    border:'none'
    
}

const label_styles={
    fontSize:'20px',
    margin:'5px'
}