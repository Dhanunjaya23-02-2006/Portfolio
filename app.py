from flask import Flask,render_template, template_rendered
app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main')
def main():
    project_list = [
        {
            'title': 'Skill-Swap',
            'description': 'Skill Swap Campus Platform is a web application that enables students to exchange skills with peers on campus. Users can create profiles, list skills they can offer, request skills they want to learn, and connect through a secure matching system. The platform promotes peer-to-peer learning, collaboration, and efficient skill development within a college community.',
            'link': 'https://skill-swap-two-livid.vercel.app/'
        },
        {
            'title': 'Chess Game',
            'description': 'A chess game built using HTML, CSS, and JavaScript. Features include move validation, piece movement, and a clean UI and web sockets.',
            'link': 'https://github.com/Dhanunjaya23-02-2006/Chess-Game'
        },
        {
            'title': 'llm Camparison model',
            'description': 'Designed a clean, scalable folder-based project structure Integrated multiple LLM APIs in a single evaluation pipeline Implemented prompt standardization for fair comparison Analyzed accuracy, reasoning quality, consistency, latency, and cost Documented insights to guide model selection for production use Models Evaluated ChatGPT (OpenAI) Gemini (Google) LLaMA (Meta – open source) Skills Demonstrated Generative AI & LLM Evaluation Prompt Engineering Python & API Integration Model Benchmarking AI System Design & Trade-off Analysis',
            'link': '#'
        }
    ]
    return render_template('home.html', projects=project_list)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/projects')
def projects():
    projects = [
        {"title":"Style GAN Image Generator", "desc":"A web application that generates images using StyleGAN technology.", "url":"https://github.com/Dhanunjaya23-02-2006/Style_GAN_IMAGE_GENERATOR"},
        {"title":"Chess Game", "desc":"A chess game built using HTML, CSS, and JavaScript.Uses features like move validation, piece movement, and a clean UI.Also socket to communication.", "url":"https://github.com/Dhanunjaya23-02-2006/Chess-Game"},
        {"title":"Shine E-commerce", "desc":"A responsive e-commerce website built with Ejs and Node.js.It contains features like cart, validation, and user authentication.", "url":"https://github.com/Dhanunjaya23-02-2006/Shine-Ecommerce"},
        {"title":"AI Quote Generator", "desc":"An AI-powered quote generator that creates inspirational quotes using machine learning models.", "url":"https://github.com/Dhanunjaya23-02-2006/Ai_Quote_Generator"},
        {"title":"Calendar App", "desc":"A calendar application built with React and Node.js. Features include event creation, editing, and deletion.", "url":"https://github.com/Dhanunjaya23-02-2006/Calendar-app"},
        {"title":"Student Management App", "desc":"A student management application built with Angular and Node.js. Features include student registration, course enrollment, and grade tracking.", "url":"https://github.com/Dhanunjaya23-02-2006/Student-Management-app-Angular"},
    ]
    return render_template('projects.html', projects=projects)


if __name__=='__main__':
    app.run(debug=True,port=8000)

