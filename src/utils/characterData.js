export const getCharacter = async (id) => {
    
    const characterData = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
    const parsedData = await characterData.json();
    
    return parsedData;
}

export const getRandCharacter = async () => { return await getCharacter(Math.floor(Math.random() * 1000))};