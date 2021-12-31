import { useState, useEffect } from "react";
import Pet from './Pet'
import useBreedList from './useBreedList'
const animals = ['dog', 'cat', 'bird', 'rabbit']
const SearchParams = () => {
    const [ location, setLocation ] = useState("")
    const [ animal, setAnimal ] = useState("")
    const [ breed, setBreed ] = useState("")
    const [ pets, setPets ] = useState([])
    const [ breeds ] = useBreedList(animal)

    useEffect(() => {
        requestPets().then()
    }, [])
    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json()
        console.log(json)
        setPets(json.pets)
    }
    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    requestPets()
                }}
            >
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={e=>setLocation(e.target.value)} value={location} placeholder="Location..."/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal} onChange={e=>setAnimal(e.target.value)} onBlur={e=>setAnimal(e.target.value)} >
                        {
                            animals.map(animal => (
                                <option value={animal} key={animal}> {animal} </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed" value={breed} onBlur={e => alert("triggered")}>
                        {
                            breeds.map(breed => (
                                <option value={breed} key={breed}> {breed} </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {pets.map(pet => (
                    <Pet  name={pet.name} animal={pet.animal} breed={pet.breed} location={location}/>
                ))
            }
        </div>
    )
}

export default SearchParams