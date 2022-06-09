import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdf from '../../assets/santunan.pdf'

const Santunan = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPagesNumber) => prevPagesNumber + offset);
  };

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };
  return (
    <div>
      <div className="text-white">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page className="mx-auto" pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )}
      </div>
    </div>
  );
};

export default Santunan;
