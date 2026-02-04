// Admin Panel Logic
const uploadForm = document.getElementById('upload-book-form');
const uploadBtn = document.getElementById('upload-btn');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    uploadBtn.disabled = true;
    uploadBtn.textContent = 'Uploading...';

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const category = document.getElementById('book-category').value;
    const description = document.getElementById('book-description').value;
    const pdfFile = document.getElementById('book-pdf').files[0];
    const coverFile = document.getElementById('book-cover').files[0];

    try {
        console.log('Starting upload process...');

        // 1. Upload PDF
        console.log('Uploading PDF:', pdfFile.name);
        const pdfName = `${Date.now()}_${pdfFile.name}`;
        const { data: pdfData, error: pdfError } = await supabase.storage
            .from('book-pdf')
            .upload(pdfName, pdfFile);

        if (pdfError) {
            console.error('PDF Upload Error:', pdfError);
            throw pdfError;
        }
        console.log('PDF uploaded successfully:', pdfData.path);
        const pdfUrl = supabase.storage.from('book-pdf').getPublicUrl(pdfData.path).data.publicUrl;

        // 2. Upload Cover
        console.log('Uploading Cover:', coverFile.name);
        const coverName = `${Date.now()}_${coverFile.name}`;
        const { data: coverData, error: coverError } = await supabase.storage
            .from('book-cover')
            .upload(coverName, coverFile);

        if (coverError) {
            console.error('Cover Upload Error:', coverError);
            throw coverError;
        }
        console.log('Cover uploaded successfully:', coverData.path);
        const coverUrl = supabase.storage.from('book-cover').getPublicUrl(coverData.path).data.publicUrl;

        // 3. Get current user ID
        console.log('Getting current user...');
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) {
            console.error('User Auth Error:', userError);
            throw userError;
        }
        console.log('User found:', user.id);

        // 4. Insert record into books table
        console.log('Inserting into database...');
        const { error: dbError } = await supabase.from('books').insert([
            {
                title,
                author,
                category,
                description,
                pdf_url: pdfUrl,
                cover_url: coverUrl,
                ceated_by: user.id   // Matching the exact typo column in your database
            }
        ]);

        if (dbError) {
            console.error('Database Insert Error:', dbError);
            throw dbError;
        }

        alert('Book uploaded successfully!');
        uploadForm.reset();

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to upload book: ' + error.message);
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.textContent = 'Upload Book';
    }
});

// Sidebar & Pill labels sync for file inputs
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function () {
        const fileName = this.files[0] ? this.files[0].name : "Choose File";
        this.nextElementSibling.textContent = fileName;
    });
});
