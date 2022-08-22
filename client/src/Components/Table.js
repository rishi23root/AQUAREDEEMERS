import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"; 


export default function Table(props){

    const {data} = props;
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / data.PerPage));
    }, [itemOffset, itemsPerPage, data]);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;

        setItemOffset(newOffset);
    };
      
    return (
        <>
        <div>
            {currentItems.map(countries =>
                    <tr > 
                        <td>{countries.id}</td>
                        <td>{countries.rank}</td>
                        <td>{countries.location}</td>
                        <td>{countries.area}</td>
                        <td>{countries.contamination}</td>
                        <td>{countries.major_contamination}</td>
                        <td>{countries.improvement}</td>
                    </tr>
            )}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
        </>
    );
};