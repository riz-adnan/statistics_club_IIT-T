import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './PDFViewer.css'; // Create a CSS file for styling

function PDFViewer() {
  const [pdfFile, setPdfFile] = useState(window.localStorage.getItem("file"));
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer">
     
      <div className="pdf-document">
        {pdfFile && (
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        )}
      </div>
      <div className="pdf-pagination">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PDFViewer;
