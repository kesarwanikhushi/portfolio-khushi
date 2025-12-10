import PyPDF2

pdf_path = '23BDO10018_Khushi.pdf'
with open(pdf_path, 'rb') as pdf_file:
    reader = PyPDF2.PdfReader(pdf_file)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
    print(text)
