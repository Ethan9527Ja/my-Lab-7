const Pagination = ({paginate, postsPerPage, currentPage, totalPosts}) => {
    const pageNumber = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    return(
        <nav>
            <ul className="pagination">
                {/* <li>
                    <a href="#" className="page-link active-page">1</a>
                </li>
                 <li>
                    <a href="#" className="page-link">2</a>
                </li> */}
                {pageNumber.map((number) => (
                    <li key={number} className="page-item">
                      <a 
                        onClick={() => paginate(number)}
                      href="#" className={`page-link ${currentPage === number ? "active-page" : ""}`}>
                        {number}

                      </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
export default Pagination;