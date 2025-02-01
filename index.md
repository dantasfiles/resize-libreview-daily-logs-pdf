---
layout: home
---
<h2>Resize <a href="https://www.libreview.com/">LibreView's</a> Daily Logs PDF for easier reading & printing
</h2>
<p>For full instructions, see Substack.</p>
<input type="file" id="pdfInput" accept="application/pdf">
<br /><br />
<button onclick="convertPdf()">Resize Daily Logs PDF</button>
<h3><a id="downloadLink" style="display: none;" download="output.pdf">Download resized Daily Logs PDF</a></h3>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script src="resize-libreview-daily-logs-pdf.js">
