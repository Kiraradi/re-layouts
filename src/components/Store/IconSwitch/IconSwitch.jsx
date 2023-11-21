import './IconSwitch.css';

export default function IconSwitch(prors) {
    const {icon, onSwitch} = prors;
  return (<>
    <link href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' rel='stylesheet'/>
    <div className= 'iconSwitch' >
      <span className='material-symbols-outlined' onClick = {() => onSwitch()}>{icon} </span>
    </div>
    </>
  )
}
