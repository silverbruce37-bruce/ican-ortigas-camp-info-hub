import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import { BookOpen, Download, ChevronLeft, ChevronRight } from 'lucide-react';

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
    pdfUrl: string;
    title?: string;
    description?: string;
    fileName?: string;
    width?: number;
    height?: number;
    orientation?: 'portrait' | 'landscape';
    layout?: 'flipbook' | 'single';
}

const BrochureViewer: React.FC<Props> = ({
    pdfUrl,
    title = "ICAN Class Brochure",
    description = "페이지를 넘겨보거나 드래그하여 브로셔를 확인해보세요.",
    fileName = "document.pdf",
    width = 450,
    height = 636,
    orientation = 'portrait',
    layout = 'flipbook'
}) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setLoading(false);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    // Calculate display dimensions based on orientation/props
    // If landscape, we might want the container to be wider.
    const containerMinHeight = height + 100;

    return (
        <div className="flex flex-col items-center w-full">
            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm w-full border border-gray-100 flex flex-col items-center">

                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-2 flex items-center justify-center gap-2">
                        <BookOpen className="text-blue-600" />
                        {title}
                    </h2>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>

                <div
                    className="relative w-full flex justify-center bg-slate-50 rounded-xl border border-gray-200 py-8 overflow-hidden"
                    style={{ minHeight: `${containerMinHeight}px` }}
                >

                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-50">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    )}

                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={null}
                        error={<div className="flex items-center justify-center h-full text-red-500 p-10">문서를 불러오는데 실패했습니다.</div>}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        {numPages && (
                            <>
                                {layout === 'flipbook' ? (
                                    // @ts-ignore
                                    <HTMLFlipBook
                                        width={width}
                                        height={height}
                                        size="stretch"
                                        minWidth={300}
                                        maxWidth={1000}
                                        minHeight={400}
                                        maxHeight={1200}
                                        showCover={true}
                                        mobileScrollSupport={true}
                                        className="shadow-2xl"
                                    >
                                        {Array.from(new Array(numPages), (el, index) => (
                                            <div key={index} className="bg-white shadow-md bg-white">
                                                <Page
                                                    pageNumber={index + 1}
                                                    width={width}
                                                    renderAnnotationLayer={false}
                                                    renderTextLayer={false}
                                                />
                                            </div>
                                        ))}
                                    </HTMLFlipBook>
                                ) : (
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="shadow-xl rounded-lg overflow-hidden border border-gray-100">
                                            <Page
                                                pageNumber={pageNumber}
                                                width={width}
                                                renderAnnotationLayer={false}
                                                renderTextLayer={false}
                                            />
                                        </div>

                                        <div className="flex items-center gap-6 bg-gray-100 rounded-full px-6 py-2">
                                            <button
                                                type="button"
                                                disabled={pageNumber <= 1}
                                                onClick={previousPage}
                                                className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-[#1d1d1f]"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <p className="text-[#1d1d1f] font-medium font-mono">
                                                {pageNumber} / {numPages}
                                            </p>
                                            <button
                                                type="button"
                                                disabled={pageNumber >= numPages}
                                                onClick={nextPage}
                                                className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-[#1d1d1f]"
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </Document>
                </div>

                <div className="mt-8">
                    <a
                        href={pdfUrl}
                        download={fileName}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full font-medium hover:bg-black transition-colors"
                    >
                        <Download size={18} />
                        PDF 다운로드
                    </a>
                </div>

            </div>
        </div>
    );
};

export default BrochureViewer;
