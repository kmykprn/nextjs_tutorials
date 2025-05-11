'use client';

export default function PDFViewer() {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="/sample.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
}