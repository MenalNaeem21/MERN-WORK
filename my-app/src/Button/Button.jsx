import styles from './Button.module.css'
function Button(){
   /*{ let count =0;
    const onClickHnadle=(name)=>{

        if(count<3){
            count++
            console.log(`u clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me`)
        }
    }

    
    return(
        <button onClick={()=>onClickHnadle("menal")} className={styles.btn}>Click Me</button>
    )

}
//use arrpw funct to stpp it fro, executing the handler right away 
            //<button onClickHnadle={()=>handle2("menal")} className={styles.btn}>Click Me</button>
   
}
*/

const handleClick=(e)=>{
    e.target.textContent="ouch"
}
return(<button onClick={(e)=>handleClick(e)} className={styles.btn}>Click Me</button>)

} 
export default Button
