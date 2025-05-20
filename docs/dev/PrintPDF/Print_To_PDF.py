from pypdf import PdfWriter
import os

def create_pdf(file_list, output_filename="repository.pdf"):
    pdf_writer = PdfWriter()
    for file_path in file_list:
        if file_path.endswith(('.txt', '.py', '.md')): # Add other text-based extensions if needed
            try:
                with open(file_path, 'r') as file:
                    text = file.read()
                    pdf_writer.add_page(text)
            except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    with open(output_filename, 'wb') as output_pdf:
        pdf_writer.write(output_pdf)

file_list = []
for root, _, files in os.walk("."):
    for file in files:
        file_list.append(os.path.join(root, file))

create_pdf(file_list)