import requests
from weasyprint import HTML

# Fetch the HTML content from the webpage
url = 'https://www.python.org'
response = requests.get(url)
html_content = response.text

# Convert the HTML content to a PDF
HTML(string=html_content, base_url=url).write_pdf(r'C:\Users\chris\plantabeta\docs\dev\PlantaBetaPDF\output\weasyprint_output.pdf')

print(f"Successfully created PDF from {url} and saved as weasyprint_output.pdf")
