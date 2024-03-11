import "./Key.css"

function Key(props) {
  function typeKey(parKey) {
    let typeClass = '';
    const valueSpan = parKey.props.children;

    if (typeof valueSpan === 'string') {
      switch (valueSpan) {
        case 'AC':
          typeClass = 'resetKey';
          break;
        case 'DEL':
          typeClass = 'delKey';
          break;
        case '+/-':
          typeClass = 'ausKey';
          break;
        case '%':
          typeClass = 'ausKey';
          break;
        case '=':
          typeClass = 'calKey';
          break;
        case '.':
          typeClass = 'decimalKey';
          break;
        case ('+'):
          typeClass = 'operatorKey';
          break;
        case ('-'):
          typeClass = 'operatorKey';
          break;
        case ('*'):
          typeClass = 'operatorKey';
          break;
        case ('/'):
          typeClass = 'operatorKey';
          break;
        case ('^'):
          typeClass = 'operatorKey';
          break;
        case ('√'):
          typeClass = 'operatorKey';
          break;
        default:
          typeClass = 'digitKey';
          break;
      }
    } else {
      alert('Error:  The argument of the function "" must be a string!!');
      typeClass = null;
    }
    return typeClass;
  }

  function handleKey(ev) {
    switch (ev.target.textContent) {
      case 'AC':
        props.setInput('');
        break;
      default:
        props.addInput(ev.target.textContent);
        break;
    }
  }

  return (
    <button type="button" className={`buttonKey ${typeKey(props.children)}`} onClick={(ev)=>handleKey(ev)}>
      {props.children}
    </button>
  )
}

export default Key;
