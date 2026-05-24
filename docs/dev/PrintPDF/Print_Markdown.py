import os
import fitz  # PyMuPDF
from pathlib import Path
from markdown_pdf import MarkdownPdf, Section

def stamp_path_on_all_pages(pdf_path, header_text):
    """Opens a PDF and stamps header_text on every page at the top."""
    doc = fitz.open(pdf_path)
    for page in doc:
        # Coordinates: 36pts from left, 20pts from top. Font size 8, grey color.
        page.insert_text((36, 20), header_text, fontsize=8, color=(0.5, 0.5, 0.5))
    doc.saveIncr()  # Saves changes back to the original file
    doc.close()

def batch_convert_recursive(source_dir, output_dirname="converted_pdfs"):
    src_path = Path(source_dir).resolve()
    dest_base = src_path / output_dirname
    dest_base.mkdir(parents=True, exist_ok=True)

    # Collect all .md files and sort them for a logical merge order
    md_files = sorted(list(src_path.rglob("*.md")))
    processed_pdfs = []

    for md_file in md_files:
        # Prevent the script from processing files inside its own output folder
        if output_dirname in md_file.parts:
            continue
            
        rel_path = md_file.relative_to(src_path)
        # Create a safe filename by joining path parts with underscores
        flat_name = "_".join(rel_path.with_suffix('').parts)
        output_file = dest_base / (flat_name + ".pdf")
        
        # 1. Convert Markdown to PDF
        pdf_gen = MarkdownPdf(toc_level=0)
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
                if not content.strip():
                    continue
                pdf_gen.add_section(Section(content))
            
            pdf_gen.save(str(output_file))
            
            # 2. Stamp the path on every page of this specific PDF
            stamp_path_on_all_pages(str(output_file), f"File: {rel_path}")
            
            processed_pdfs.append(output_file)
            print(f"Stamped & Saved: {rel_path}")
            
        except Exception as e:
            print(f"Failed {rel_path}: {e}")

    # 3. Merge all already-stamped PDFs into one master file
    if processed_pdfs:
        merged_doc = fitz.open()
        for pdf_path in processed_pdfs:
            with fitz.open(pdf_path) as sub_doc:
                merged_doc.insert_pdf(sub_doc)
        
        master_output = dest_base / "00_Merged_All_Files.pdf"
        merged_doc.save(str(master_output))
        merged_doc.close()
        print(f"\n--- SUCCESS ---")
        print(f"Master file created: {master_output}")

if __name__ == "__main__":
    # Update this path to your target directory
    target = r'C:\Users\chris\plantabeta\docs\reference\Elements'
    batch_convert_recursive(target)
