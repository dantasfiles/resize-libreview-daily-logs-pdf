---
layout: home
---
# Resize <a href="https://www.libreview.com/">LibreView's</a> Daily Logs PDF for easier reading & printing

For full instructions, see Substack.
  
<input type="file" id="pdfInput" accept="application/pdf">

<button onclick="convertPdf()">Resize Daily Logs PDF</button>

## <a id="downloadLink" style="display: none;" download="output.pdf">Download resized Daily Logs PDF</a>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script src="resize-libreview-daily-logs-pdf.js">
