import React from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import resume from '../extras/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',}}
    >
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}