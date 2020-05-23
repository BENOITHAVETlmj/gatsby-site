import React, { RefObject } from 'react';


const NameForm: React.FC = () => {
    const nameRef: RefObject<HTMLInputElement> = React.createRef();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault; if (nameRef.current) { alert(nameRef.current.value) } }

    return (

        <form onSubmit={handleSubmit}><input type="text" ref={nameRef} /><button>Submit</button> </form>
    )
}


export default NameForm;