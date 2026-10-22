# Welcome to my personal website ! 

This is a labor of love where I'm allowing myself to learn more about frontend, backend, and CI/CD. 

This site is a work in-progress, and that's intentional. I'm limiting my use of AI on this site for my own learning & enjoyment. 

# How I'm Using AI 
- Help remembering terminal commands on my web server 
- Asking questions about server configuration files 
- Debugging issues with my CI/CD pipeline
- Help automating routine tasks, like updating my resume and drafting issues 

# How I'm NOT Using AI 
- Designing the look of this site
- Implementing frontend features
- Writing site content for me (I may ask it for feedback on my own writing from time to time. If you're aware of any good human-made copywriting resources, please send them my way!)

# Architecture Choices 

After the PHP2Shell exploit, I had to spin up a new droplet on a newer Ubuntu version. I took this as an opportunity to re-architect my backend. 

I'm switching from apache to nginx, and from php to a Jinja2 build step. 

Any small bits of interactivity will be added with vanilla JS as-needed for now. 
