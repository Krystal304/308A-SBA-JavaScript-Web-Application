


async function getDogData(breedid) {
    const apiKey = 'api_key=live_s1x3sj6JjCeyIG0l4zoGHjW3LOU90I4DfhT8jRh4UQqDHg1aJnMysCROeZVFnO2Y'
    const url =`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedid}&api_key=${apiKey}`;
    try {
  
      const response = await fetch(url);
    
    if (!response.ok){
        throw new Error ('error fetching data')
    }
    const data = await response.json();
    console.log(response)
    console.log(data)

    } catch (error) {
      console.error(error);
    }
  }
  getDogData()

  async function dataBreed(breedName, breedId) {
    const breedInfo = document.getElementById(breedId);

    try {

      const reponse = await getDogData(breedName);
      if(reponse && data.length > 0){
        const breed = data[0];
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Optionally re-throw the error to handle it further up the call stack
    }
  }