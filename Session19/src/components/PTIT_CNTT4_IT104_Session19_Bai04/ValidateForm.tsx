import { useState } from "react";

export default function Ex04() {
    const [user,setUser] = useState({name:"",email:""});
    const [error,setError] = useState({name:"",email:""});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        if (value === ''){
            setError({...error,[name]:"Không được để trống"});
        } else {
            setError({...error,[name]:""});

            setUser({...user,[name]:value});
        };
    };


    return (
        <div>
            <div>
                <input type="text" name ="name" onChange={handleChange} />
                <p style={{color : 'red'}}>{error.name}</p>
            </div>
            <div>
                <input type="text" name="email" onChange={handleChange} />
                 <p style={{color : 'red'}}>{error.email}</p>
            </div>
            <button>Save</button>
        </div>
    )
}