import {searchBooks} from "../utils/API";
import {useState} from "react";

const SearchPage = () => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        searchBooks(input).then(data=> console.log(data));
    }

    return <div className="container">
        
        <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Type A Book Name</span>
    </div>
    <input onChange={(e) => setInput(e.target.value)} type="text"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
    <button type="button" onClick={handleSearch} class="btn btn-success">Search!</button>
  </div>
  </div>
}

export default SearchPage;