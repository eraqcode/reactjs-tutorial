import {useEffect, useState} from 'react';
import { Posts } from './Components/Posts/Posts';
import { Pagination } from './Components/Pagination/Pagination';
import { getPosts } from './helper/getPosts';

function App() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [elementPerPage] = useState(6);
  const [currentPage, setcurrentPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    getPosts()
      .then(resp => {
        setPosts( resp ) 
        setLoading(false)
      })
    
  }, [getPosts])

  //Get current elements
  let indexOfLastElementtoShow = currentPage * elementPerPage;
  let indexOfFirstElementToShow = indexOfLastElementtoShow - elementPerPage;
  let currentElements = posts.slice( indexOfFirstElementToShow, indexOfLastElementtoShow )

  //Function to determinate the page number
  let paginate = pageNumber => setcurrentPage( pageNumber )

  return (
    <div className="container" style={{paddingBottom: '20px'}}>
      <h1>BlogPost</h1>

      <Posts 
        currentElements={currentElements}
        loading={loading}
      />

      <Pagination 
        elementsPerPage = {elementPerPage}
        totalElements = { posts.length }
        paginate = {paginate}
      />
    </div>
  );
}

export default App;
