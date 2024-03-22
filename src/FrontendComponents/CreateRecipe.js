import { useState } from "react";
import axios from "axios";

//this is for creating a new recipe
function CreateRecipe() {

    const [title, setTitle] = useState('');
    const [allergens, setAllergenInfo] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const password = ""

    const handleSubmit = (e) => {
        //avoid page refresh
        e.preventDefault();
        console.log(file);

        const formData = new FormData(); //Formdata is used for passing the file to the server.
        //Learned how to use FormData from here: https://stackoverflow.com/a/62369284

        formData.append('title', title);
        formData.append('allergens', allergens);
        formData.append('description', description);
        formData.append('password', password);
        formData.append('file', file);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post('http://localhost:4000/recipes', formData, config)
            .then()
            .catch();

    }

    return (
        <div >
            <h1>Submit Recipe</h1>
            <br></br>
            <form onSubmit={handleSubmit} style={{ padding: '30px' }}>
                <div className="form-group" >
                    <label>Recipe Title: </label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />

                </div>
                {/*  Allegens */}
                <div className="form-group">
                    <label>Allergen Information: </label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="text"
                        className="form-control"
                        value={allergens}
                        onChange={(e) => { setAllergenInfo(e.target.value) }} />
                </div>

                {/* Description */}
                <div className="form-group">
                    <label>Description: </label>
                    <textarea
                        style={{ backgroundColor: 'whitesmoke' }}
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>PDF: (Max 16MBs)</label>
                    <input
                        style={{ backgroundColor: 'whitesmoke' }}
                        type="file"
                        className="form-control"
                        accept="application/pdf"
                        value={file.filename}
                        onChange={(e) => {
                            //console.log(e.target.files[0])

                            setFile(e.target.files[0]) 
                            }}
                    />
                </div>
                
                <br></br>
                {/* Submit*/}
                <div>
                    <input type="submit" value="Add Menu Item" className="btn btn-info" />
                </div>
            </form>

        </div>
    );
}

export default CreateRecipe;