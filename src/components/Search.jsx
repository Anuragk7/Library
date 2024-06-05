import React, { useEffect, useState } from 'react';
import BookCard from './Book';
import debounce from 'lodash.debounce';



  
function SearchBar() {
  
   const [query, setQuery] = useState("")
   const [results, setResults] = useState([])
   const [loading,setLoading] = useState(false)


   const fetchData = async (query, cb) => {
    console.warn('fetching ' + query);
    setLoading(true);
   
        console.warn('Fetching data for: ' + query);
        
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
    
            let data = await response.json();
           // cb(data);
            let arr = [];
          
            let data1 = data.docs
            for (let i=0; i<10; i++){
                
                arr.push({title: data1[i].title, author: data1[i].author_name, isbn: data1[i].isbn[0], year: data1[i].first_publish_year, rating: data1[i].ratings_average + "/5"})
            }
            cb(arr)
           
            
        } catch (error) {
            console.error('Error:', error);
            cb([]);
        }
        finally {
            setLoading(false);
        }
    
    
  
};
  
  const debouncedFetchData = debounce((query, cb) => {
    fetchData(query, cb);
  }, 500);


   function handleSearch (){
   
    debouncedFetchData(query, (res)=> {
        setResults(res);
    })
  }
   useEffect(()=> {
        handleSearch(); 
    },[query])
  
    return (
        <div className='bg-black'>
            <div className="flex items-center justify-between bg-black p-4 mb-4 rounded-lg">
                <input
                    type="text"
                    placeholder="Search Books..."
                    value={query}
                    onChange={(e) => {
                        e.preventDefault();
                        setQuery(e.target.value);
                    }}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mr-4"
                />
                <button
                    onClick={handleSearch}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                    Search
                </button>
            </div>
            
            <div className='min-h-screen '>
                {loading ? (
                    <div className="text-white">Loading...</div>
                ) : (
                    results.map((m, index) => {
                        return (
                           
                            <BookCard key = {index} details = {m} />
                        );
                    })
                )}
            <h1 className="text-white text-center">Marquee Investments Assignments By Anurag Khugshal</h1>

            </div>
        </div>
    );
}

export default SearchBar;
