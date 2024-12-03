
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const { HfInference } = require('@huggingface/inference');

const app = express();
const upload = multer({ dest: 'uploads/' });
const hf = new HfInference('hf_4gH3nH8J4kS9zF2R7uM1pQ6x');  

app.use(express.json());

let quizAnswers = []; 
app.post('/upload-notes', upload.single('notes'), async (req, res) => {
    const file = req.file;
    const contentType = req.body.contentType;

    try {
        // Parse PDF or TXT content
        let fileContent;
        if (file.mimetype === 'application/pdf') {
            const data = await pdfParse(file);
            fileContent = data.text;
        } else if (file.mimetype === 'text/plain') {
            fileContent = fs.readFileSync(file.path, 'utf8');
        } else {
            return res.status(400).send({ message: 'Unsupported file type.' });
        }

        let response;
        if (contentType === 'quiz') {
            response = await hf.textGeneration({
                model: 'text-davinci-003',
                inputs: `Generate a quiz based on: ${fileContent}`,
            });

            // Assuming response includes questions and answers
            quizAnswers = response.answers; // Store correct answers temporarily

            res.send({ message: { questions: response.questions } });
        } else if (contentType === 'summary') {
            response = await hf.summarization({
                model: 'facebook/bart-large-cnn',
                inputs: fileContent,
            });
            res.send({ message: response.summary_text });
        } else if (contentType === 'crossword') {
            // Currently simulating crossword generation (can replace with real logic or API)
            response = { message: 'Crossword generation is currently not available.' };
            res.send(response);
        } else {
            res.status(400).send({ message: 'Invalid content type.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error generating content.' });
    }
});

// Endpoint to evaluate quiz
app.post('/evaluate-quiz', (req, res) => {
    const userAnswers = req.body.answers;
    let correctCount = 0;

    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i].toLowerCase().trim() === quizAnswers[i].toLowerCase().trim()) {
            correctCount++;
        }
    }

    const percentage = Math.round((correctCount / quizAnswers.length) * 100);
    res.send({ percentage: percentage });
});

// Chatbot endpoint to handle user messages
app.post('/chatbot', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await hf.textGeneration({
            model: 'gpt-3.5-turbo',
            inputs: `User: ${userMessage}
Assistant:`,
        });

        res.send({ message: response.generated_text });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error processing chatbot request.' });
    }
});

// Serve the application
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
