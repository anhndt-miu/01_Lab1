import React, { useState } from "react";

function FormComponent({onRefresh}) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        program: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/v1/students", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res)=>{
            if (!res.ok){
                if (res.status === 400) {
                    return res.json().then(errorData => {
                        throw new Error(errorData.message);
                      });
                  } else {
                    throw new Error(`Error: ${res.status}`)
                  }
            }

            return res.json()
        }).then((_)=>{
            handleClear(e)
            alert("Create student success")
            onRefresh()
        }).catch((err)=>{
            alert(err)
        }).finally((_)=>{
            
        })
    };

    const handleClear = (e) => {
        e.preventDefault();
        setFormData({
            id: "",
            name: "",
            program: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="FormComponent">
                <div className="Title">Create a student</div>
                <div className="Spacer"></div>
                <label >id:</label>
                <input
                    type="text"
                    name="id"
                    maxLength="10"
                    placeholder="Enter student id"
                    value={formData.id}
                    onChange={handleChange}
                />
                <label >name:</label>
                <input
                    type="text"
                    name="name"
                    maxLength="30"
                    placeholder="Enter student name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label >program:</label>
                <input
                    type="text"
                    name="program"
                    maxlength="20"
                    placeholder="Enter student program"
                    value={formData.program}
                    onChange={handleChange}
                />
                <div className="FormButtonContainer">
                    <button className="ClearButton" type="Clear" onClick={handleClear}>Clear</button>
                    <button className="SubmitButton" type="submit">Submit</button>
                </div>
            </div>


        </form>
    );
}


export default FormComponent;