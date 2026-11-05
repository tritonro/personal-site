import jinja2
from collections import namedtuple
from dataclasses import dataclass, asdict
import os


ROOT = os.path.dirname((os.path.abspath(__file__))) #repo root
TEMPLATES = os.path.join(ROOT, "templates")

loader = jinja2.FileSystemLoader(TEMPLATES) 
env = jinja2.Environment(autoescape=True, loader=loader)

@dataclass(frozen=True)
class Page: 
   name: "str"
   display_name: "str"
   link: "str"
   def get_dp_name(self): 
      return self.display_name
   def get_link(self): 
      return self.link

@dataclass
class Site: 
   pages : list[Page]
   def print_pages(self): 
      for p in self.pages: 
         print(asdict(p))
   def render_site(self): 
      TEMPLATE_EXT = ".html.jinja"
      RENDER_EXT = ".html"
      RENDER_PATH = os.path.join(ROOT, "public_html/src/") 
      for p in self.pages: 
         template_filename = p.name + TEMPLATE_EXT
         temp = env.get_template(template_filename)
         temp = temp.render(site=self, page=p)
         render_filename = RENDER_PATH + p.name + RENDER_EXT
         if not os.path.exists(RENDER_PATH): 
            os.makedirs(RENDER_PATH)
         with open(render_filename, 'w') as f:
            print(temp, file = f)


home = Page("index", "Home", "/")
about = Page("about", "About", '/src/about.html')
now = Page("now", "Now", '/src/now.html')
projects = Page("projects", "Projects", "/src/projects.html")
resume = Page("resume", "Resum&#233;", '/src/resume.html' )
my_site = Site([home, about, now, projects, resume])
my_site.render_site()

