


async function getData(breedid) {
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
  getData()