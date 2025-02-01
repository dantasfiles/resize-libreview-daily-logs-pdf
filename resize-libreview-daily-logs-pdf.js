
async function convertPdf() {
    const input = document.getElementById('pdfInput').files[0];
    if (!input) {
        alert("Please select a Daily Logs PDF file.");
        return;
    }
    const reader = new FileReader();
    reader.readAsArrayBuffer(input);
    reader.onload = async function () {
        const existingPdfBytes = reader.result;
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
        const newPdf = await PDFLib.PDFDocument.create();
        pages = pdfDoc.getPages()
        const { width, height } = pages[0].getSize();
        for (const page of pages) {
            const newPage = newPdf.addPage([height, width]);
            const copiedPage = await newPdf.embedPage(page, { left: 0, right: width, bottom: height / 3.0, top: height });
            newPage.drawPage(copiedPage, { xScale: height / width, yScale: 3.0 * width / 2.0 / height });
        }
        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.style.display = 'block';
    };
}